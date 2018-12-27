import React from 'react'
import PropTypes from 'prop-types'

import Page from 'components/PageList/Page'

export default class PagePathList extends React.Component {
  render() {
    const { pages, excludePathString } = this.props
    const items = pages.map(page => {
      const pageId = '#' + page._id
      return (
        <Page page={page} linkTo={pageId} key={page._id} excludePathString={excludePathString}>
          <div className="page-list-option">
            <a href={page.path}>
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </Page>
      )
    })
    return <ul className="page-list-ul nav">{items}</ul>
  }
}

PagePathList.propTypes = {
  pages: PropTypes.array.isRequired,
  excludePathString: PropTypes.string.isRequired,
}
