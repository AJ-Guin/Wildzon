import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      {/* top bar */}
      <Topbar />
      {/* nav bar */}
      <Navbar />
      {/* Cart drawer */}
    </header>
  )
}

export default Header
