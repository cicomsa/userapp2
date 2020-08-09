import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from './components/Content'
import Homepage from './components/Homepage'

// To implement a dynamic way to write the bellow Routes
const App = () => {
  return (
    <Router>
      <Route path="/page-a" component={Content} />
      <Route path="/page-b" component={Content} />
      <Route path="/page-c" component={Content} />
      <Route path="/" component={Homepage} />
    </Router>
  )
}

export default App;
