import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Content from './components/Content'

// To implement a dynamic way to write the bellow Routes
const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/page-a" component={Content} />
        <Route path="/page-b" component={Content} />
        <Route path="/page-c" component={Content} />
      </Layout>
    </Router>
  )
}

export default App;
