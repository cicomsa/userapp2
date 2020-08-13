import React from 'react'
import PageLink from '../PageLink'

const Header = ({ links, pathName }) => {

  return (
    <div>
      {
        links
          .filter(content => content.path !== pathName)
          .map(content =>
            <PageLink
              path={content.path}
              linkTitle={content.linkTitle}
              key={content.linkTitle}
            />
        )
      }
    </div>
  )
}

export default Header
