import React from 'react'
import pageAData from '../../data/page-a-data.json'
import pageBData from '../../data/page-b-data.json'
import pageCData from '../../data/page-c-data.json'

const getData = {
  '/page-a-data.json': pageAData,
  '/page-b-data.json': pageBData,
  '/page-c-data.json': pageCData
}

const Table = ({ table }) => {
  const { apiEndpoint, columns } = table
  const contentData = getData[apiEndpoint]

  return (
    columns.map(column => {
      return (
        <div key={column.title}>
          <p>{column.title}</p>
          {
            contentData.map(c => {
              const keyName = column.title.toLowerCase()

              return (
                <p key={c[keyName]}>{c[keyName]}</p>
              )
            })
          }
        </div>
      )
    })
  )
}

export default Table
