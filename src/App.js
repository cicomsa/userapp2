import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './components/Content'

// To implement a dynamic way to write the bellow Routes
const App = () => {
  return (
    <Router>
      <Route path="/pages-a" component={Content} />
      <Route path="/pages-b" component={Content} />
      <Route path="/pages-c" component={Content} />
      <Route path="/" component={<Link to='/page-a'>Page A</Link>} />
    </Router>
  )
}

export default App;
