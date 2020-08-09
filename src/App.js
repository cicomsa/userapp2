import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './components/Content'

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Link to='/page-a'/>
      </Route>
      <Route path="/page-a">
        <Content />
      </Route>
      <Route path="/page-b">
        <Content />
      </Route>
      <Route path="/page-c">
        <Content />
      </Route>
    </Router>
  )
}

export default App;
