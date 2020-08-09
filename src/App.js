import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Content from './components/Content'

// To implement a dynamic way to write the bellow Routes
const App = () => {
  return (
    <Router>
      <Route path="/" component={Content} />
    </Router>
  )
}

export default App;
