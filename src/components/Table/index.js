import React, { useEffect, useState } from 'react'
import CheckSVG from '../CheckSVG'
import pageAData from '../../data/page-a-data.json'
import pageBData from '../../data/page-b-data.json'
import pageCData from '../../data/page-c-data.json'
import './index.css'

// only for mock data usage case
const getData = {
  '/page-a-data.json': pageAData,
  '/page-b-data.json': pageBData,
  '/page-c-data.json': pageCData
}

const Table = ({ table }) => {
  const [contentData, setContentData] = useState([])
  const { apiEndpoint, columns } = table

  useEffect(() => {
    // API call/GraphQL query replacement - fake
    const data = getData[apiEndpoint]

    setContentData(data)
  },[apiEndpoint, contentData])

  return (
    <div className="wrapper">
      {
        columns.map(column => {
          return (
            <div key={column.title} className="content">
              <p>{column.title}</p>
              {
                contentData.map(c => {
                  const keyName = column.title.toLowerCase()

                  return (
                    // unique key errors to be fixed
                    <p
                      className={c[keyName] === true ? 'online' : ''}
                      key={c.id}
                    >
                      {c[keyName] === true ? <CheckSVG /> : c[keyName]}
                    </p>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Table
