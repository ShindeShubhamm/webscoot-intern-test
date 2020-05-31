import React from 'react'
import Navbar from './Navbar/Navbar'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Layout