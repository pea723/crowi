import Debug from 'debug'
import auth from './auth'
import { google as googleApis } from 'googleapis'

const debug = Debug('crowi:lib:googleAuth')

export default (config) => {
  const lib: any = {}

  lib.PROVIDER = 'google'

  function createOauth2Client() {
    const clientId = config.crowi['google:clientId']
    const clientSecret = config.crowi['google:clientSecret']
    const callbackUrl = config.crowi['app:url'] + '/google/callback'
    return new googleApis.auth.OAuth2(clientId, clientSecret, callbackUrl)
  }

  lib.createAuthUrl = function (req, callback) {
    const oauth2Client = createOauth2Client()
    googleApis.options({ auth: oauth2Client })

    const redirectUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
      state: req.query.continue,
      prompt: 'consent',
    })

    callback(null, redirectUrl)
  }

  lib.refreshAccessToken = async (tokens) => {
    const oauth2Client = createOauth2Client()
    googleApis.options({ auth: oauth2Client })
    oauth2Client.setCredentials({ access_token: tokens.accessToken, refresh_token: tokens.refreshToken })
    const {
      res: {
        data: { access_token: accessToken, refresh_token: refreshToken, expiry_date: expiryDate },
      },
    } = (await oauth2Client.refreshAccessToken()) as any
    return { accessToken, refreshToken, expiryDate }
  }

  lib.reauth = async (id, { accessToken, refreshToken }) => {
    try {
      const tokens = await lib.refreshAccessToken({ accessToken, refreshToken })
      const oauth2Client = createOauth2Client()
      googleApis.options({ auth: oauth2Client })
      oauth2Client.setCredentials({ access_token: tokens.accessToken, refresh_token: tokens.refreshToken })
      const {
        data: { user_id: userId },
      } = await googleApis.oauth2('v2').tokeninfo({ access_token: tokens.accessToken })
      const success = id === userId

      return { success, tokens }
    } catch (err) {
      debug('Error on reauthenticating', err)

      return { success: false }
    }
  }

  lib.handleCallback = function (req, callback) {
    const oauth2Client = createOauth2Client()
    googleApis.options({ auth: oauth2Client })
    const { google = {} } = req.session
    const { authCode: code } = google

    if (!code) {
      return callback(new Error('No code exists.'), null)
    }

    debug('Request googleToken by auth code', code)
    oauth2Client.getToken(code, function (err, tokens) {
      debug('Result of google.getToken()', err, tokens)
      if (err) {
        return callback(new Error('[googleAuth.handleCallback] Error to get token.'), null)
      }

      oauth2Client.setCredentials({
        access_token: (tokens as any).access_token,
      })

      const oauth2 = googleApis.oauth2('v2')
      oauth2.userinfo.get({}, function (err, response) {
        debug('Response of oauth2.userinfo.get', err, response && response.data)
        if (err) {
          return callback(new Error('[googleAuth.handleCallback] Error while proceccing userinfo.get.'), null)
        }
        const { access_token: accessToken, refresh_token: refreshToken, expiry_date: expiryDate } = tokens as any
        auth.saveTokenToSession(req, lib.PROVIDER, { accessToken, refreshToken, expiryDate })
        const { data } = response as any
        data.user_id = data.id // This is for B.C. (tokeninfo をつかっている前提のコードに対してのもの)
        return callback(null, data)
      })
    })
  }

  return lib
}
