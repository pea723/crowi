CHANGES
========

## 1.7.9

- Fix: Redirecting to the password setting page incorrectly when a user logged in (#469)
- Fix: Some configs will not be updated on multi apps (#475)
- Fix: Error when Basic auth is required and receive Bearer token (#480)

## 1.7.8

- Feature: Recently viewd page list appears when focus on search bar (#415)
- Feature: Rebuild search index without downtime (#406)
- Feature: Slack unfurl (#417, Thank you @mootoh for the original idea #204)
- Feature: Restrict mode of forcing user to connect Google/GitHub and its login flow (#349)
- Feature: Support dnscache to improve speed of network access (#407)
- Feature: Support image type svg+xml (#432)
- Improve: Add help text for Slack config (#433, thank you @potato4d)
- Improve: Preventing updating last update timestamp on rename tree (#416)
- Improve: Render empty table cell (update marked) (#399, thank you @naughtLdy)
- Fix: Update config correctly even run Crowi with multiple servers (#435)
- and some fixes. (Thank you @okonomi, @inductor, @potato4d

## 1.7.7

- Release revoked.

## 1.7.6
- Fix: error occurs in admin/share page after a shared page was completely deleted (#393)
- Improve: Resize profile image before upload (#400)
- Security: escape path to protect from XSS (#404)
- some refactorings, internal fixes. (Thanks you @Sw0rdstream, #394, #395, #396)

## 1.7.5

- Improve: Not to allow input on API key form (Thank you @is2ei, #379)
- Improve: Performances of page and list page (#384, #386)
- Improve: The calculation method of search score (#391)
- Improve: Search result UI and Build index page for Elasticsearch UX (#391)
- I18n: Unportalize dialog (#381)

## 1.7.4

- Improve: Add portalize button to menu (#368)
- Fix: Broken layout on extra small devices (#366)
- Fix: Can't access files on shared pages if it isn't set secret keyword (#370)

## 1.7.3

- Improve: Search users on `/admin/users` page (#360)
- Changes: Use only websocket transport (#355)
- Fix: Disable resize of editor textarea (#358)
- Fix: Can't rename tree under certain conditions (#362)

## 1.7.2

- Fix error when loading all pages caused by sort option.

## 1.7.0

- Feature: GitHub Authentication (#282)
- Feature: Rename a page hierarchy (#301)
- Feature: Share pages externally (#313, #334)
- Feature: Group search results by page type (#312)
- Improve: Support pagination on the search api (Thank you @hirakiuc, #293)
- Improve: Support bearer token (Thank you @hirakiuc, #299)
- Fix: Can't add page grant correctly with mongodb 3.6 (#326)
- Updates: Elasticsearch v6 (#336)
- Updates: FontAwesome v5 (#288)
- API Changes:
    - Add `bookmarks.list` (Thank you @hirakiuc, #296)
- Dev: Introduce Prettier and ESLint instead of JSHint (#297)
- And some document updates, package updates. Thank you @onsd @inductor.

## 1.6.5

- Fix: Can't add page grant correctly with mongodb 3.6 (#325)

## 1.6.4

- Fix: Can't unportalize in case (#286)
- Fix: Handle error on search page (#276)
- Fix: Clear session when failing google login (Thank you @chuganzy, #273)
- Fix: Error on bulk operation for adding large amout of pages to search (#271)
- Fix: Specify bonsai version for heroku.
- Dev: Added docker-compose for development environment.

## 1.6.3

- Fix: Invalid MathJax setting
- Fix: Check e-mail duplication (#257)
- Updates: load ENV from `.env`
- Improve: Use client date (Thanks @suzuki)
- Improve: Slack module update and add link to post text
- And some fixes. Thank you @okonomi @tkitsunai.

## 1.6.2

- Feature: Support PlantUML
- Feature: Support MathJax
- Fix: API authentication conflicts header of Basic Auth (#226 Thanks @Charo-IT)
- Fix: Cannot bookmark Portal page
- Fix: Highlight searched keyword on search result page
- And some refactorings, bug fixes, internal fixes. (Thaon, @hideo54, @Tamason)

## 1.6.1

- Feature: Non-image file uploads and its settings,
- Feature: Attachment remove #205,
- Feature: Attachment redirector (and proxy),
- Feature: Delete page completely and delete redirect,
- Fix: Not render Emoji in code block #202,
- Fix: Order of parsing access token order,
- Changes: Page name with spaces around `/` is now not creatable,
- API Changes:
    - Changed `attachments.add`
    - Add `attachments.remove`
- Library Update: Now using webpack2, React.js 15.5,
- And some refactorings, bug fixes, internal fixes. (Thank you @yuki-takei, @okonomi)

## 1.6.0

- I18N
- Improved diff view
- - Minus search
- - Supports Elasticsearch 5.x
- Special thank you for the great pull requests: @b4b4r07 @kaz @hasete2 @okonomi
- And also special thanks for the translation: @Hidsm

## 1.5.3

* Added node-shrinkwrap.json
* Fix: Undo behavior after pasting (#151).
* Feature: Password reset for admin.
* Feature: Implement some APIs.
* Improve: Likes on smartphone.
* And some fixes. (Thank you @suzuki @okonomi)

## 1.5.2

* Fix: Edit button on smartphone.
* Fix: Avoid timeout on rebuilding search index.
* Improve: Search screen on smartphone.
* Improve: New page dialog.
* Improve: Update link color.
* Add node version for CI.
* Changed assets loader.
* And some fixes. (Thank you @suzuki @kdmsnr @crow-misia)

## 1.5.1

* Fix: Broken corwi.min.js (thank you @Bakudankun #135)
* Fix: Use id permalink instead of the page path on notify to Slack.
* And some fixes and updates. (Thank you: @kzbandai @chuganzy)

## 1.5.0

* Feature: Search.
* Feature: CSRF protection.
* Feature: Page deletion.
* Feature: Emoji.
* Feature: TSV parser for code block.
* Feature: Page teamplte builder.
* Feature: Preview scroll sync.
* Improve: Page header highlighting.
* Improve: Changed icons and colors of for popular pages on page list.
* Improve: New page dialog.
* Fix: Couldn't create some page name like `/meeting` (Thank you @kazsw #100).
* Removed Feature: Facebook login feature is now removed.
* And some fixes. (Thank you @suzuki @xcezx)

## 1.4.0

* Feature: Slack integration.
* Feature: Page comment.
* Feature: User page.
* Feature: User bookmark page and created pages list.
* Feature: Portal for list.
* Feature: History diff (Thank you: @suzuki #65).
* Feature: Image uploader for local server (Thank you: @riaf ).
* Improve: List view styles.
* Improve: Paste handler with `> ` line (Thank you: @suzuki #57).
* Fix: Google Apps cliendId validation (Thank you: @suzutan #72).
* Fix: Bug of detecting prefix of the path on list view.
* And some fixes. (Thank you: @yuya-takeyama @takahashim)
* Library Update: now Crowi doesn't depends on bower.

## 1.3.1

* Fix: Logic of checking uploadable was broken.
* Fix: Creatable page name (Thank you: @riaf #42, Reported #33).
* Fix: Warning on uploading with create page.
* Fix: Error on uploading user profile image.

## 1.3.0

* Feature: Image uploader.
* Feature: Textarea editor (Thank you: @suzuki #38).
* Feature: Register API Token for user and added `pages.get` api (Experimental).
* Improve: Design on full-screen editor.
* Fix: Library version (mongoose-paginator is now fixed its version).
* Add unit test for user model.
* Library Update: node.js 4.2.x, npm 3.3.x and so far.

## 1.2.0

* Re-writed application structure.
* Add unit test for page model. (Thank you: @shinnya)

## 1.1.3

* Fix: Error occured on editting when the path includes multibyte string. (Thanks @shinnya)
* Added .gigignore to keep tmp/googlecache dir

## 1.1.2

* Feature: Add one-click button to create today's memo on  header (Thanks @fivestar).
* Fix: Fixize version of dependent libraries. (Thanks @shinnya)
* Fix: Google Project OAuth is working now (Thanks @yudoufu).
* Fix: Disabled auto-highlight because of the slow of the language detection.
* Change: Now `.` included `username` are allowed.
* Remove documentation from this repository. See [GitHub Wiki](https://github.com/crowi/crowi/wiki) instead. (Thanks @shinnya)
* And some fixes. (Thank you: @suzuki @yudoufu @fivestar @shinnya)

## 1.1.1

* Fix: Error on accessing restricted page.
* Fix: JS Error when section title includes colon.
* Fix: Typo on Facebook setting page (Facebook setting is now available).
* Fix and Feature: Add creator property to Page Object and show creator info in sidebar instead of last update user.

## 1.1.0

* Feature: Use redis for session store!
* Feature: Mail setting and added send mail module.
* Feature: User invitation.
* Feature: Activate invited user self (admin).
* Feature: Activate registered user (admin / using RESTRICTED mode).
* Feature: User suspend (admin).
* Feature: User delete (admin).
* Improve: Wiki style improved.
* Improve: Update favicon (high resolution).
* Fix: Affix header handling.
* Library Update: Bootstrap 3.3.1, Fontawesome 4.2.0, async 0.9.0,

## 1.0.4

* Feature: Basic auth restriction whole pages access.
* Fix: Security registration whitelist is working now.

## 1.0.3

* Initial Release.

