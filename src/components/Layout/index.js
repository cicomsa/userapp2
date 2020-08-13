import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import data from '../../data/pages.json'

const Layout = ({ children }) => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <>
      <Header data={data} pathName={pathName} />
      {children}
    </>
  )
}

export default Layout
