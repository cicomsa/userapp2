import React from 'react'
import PageLink from '../PageLink'

const Header = ({ data, pathName }) => {
  return (
    <div>
      {
        data
          .filter(content => content.path !== pathName)
          .map(content => <PageLink path={content.path} linkTitle={content.linkTitle}/>)
      }
    </div>
  )
}

export default Header
