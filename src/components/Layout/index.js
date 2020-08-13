import React from 'react'
import { useLocation } from 'react-router-dom'
import PageLink from '../PageLink'
import data from '../../data/pages.json'

const Layout = ({children}) => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <>
      <div className="links-wrapper">
        {
          data
            .filter(content => content.path !== pathName)
            .map(content => <PageLink path={content.path} linkTitle={content.linkTitle}/>)
        }
      </div>
      {children}
    </>
  )
}

export default Layout
