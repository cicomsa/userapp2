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

const components = {
  name: ({ name, avatar }) => <p>{name}</p>,
  email: ({ email }) => <p><a href="" email={email}>{email}</a></p>,
  location: ({ location }) => <p>{location}</p>,
  online: ({ online }) =>  online && <p className="online"><CheckSVG /></p>
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
          const keyName = column.title.toLowerCase()
          const Component = components[keyName]

          return (
            <div key={column.title} className="content">
              <p>{column.title}</p>
              {
                contentData.map(c => {
                  return (
                    <Component {...c} key={c.id} />
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
