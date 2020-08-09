import React from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../Title'
import Description from '../Description'
import Table from '../Table'
import data from '../../data/pages.json'

const components = {
  pageTitle: Title,
  pageDescription: Description,
  table: Table
}

const Content = () => {
  const location = useLocation()
  const pathName = location.pathname

  const content = data.find(content => content.path === pathName)
  const contentKeys = Object.keys(content)

  return (
    contentKeys
      .filter(key => key !== 'path' && key !== 'linkTitle')
      .map(key => {
      const Section = components[key]

      return <Section key={key} {...content}/>
    })
  )
}

export default Content
