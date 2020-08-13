import React from 'react'
import Table from '../Table'

const Content = ({ content }) => {
  if (!content) return null
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
