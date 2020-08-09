import React from 'react'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Link className="link" to='/page-a'>Page A</Link>
      <Link className="link" to='/page-b'>Page B</Link>
      <Link className="link" to='/page-c'>Page C</Link>
    </>
  )
}

export default Homepage
