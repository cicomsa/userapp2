import React from 'react'
import { useLocation } from 'react-router-dom'
import Table from '../Table'
import data from '../../data/pages.json'

const Content = () => {
  const location = useLocation()
  const pathName = location.pathname

  // data should come from an API call/GraphQL query - mock functionality not implemented
  const content = data.find(content => content.path === pathName)
  const { table, pageDescription, pageTitle} = content

  return (
    <>
      {pageTitle && <h2>{pageTitle}</h2>}
      {pageDescription && <p>{pageDescription}</p>}
      {table && <Table table={table} />}
    </>
  )
}

export default Content
