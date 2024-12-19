import React from 'react'
import './Header.css'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <header className="header">
        <HashLink className="logo" smooth to="#">Desi Dharti</HashLink>
      <nav className="nav-menu">
          <HashLink smooth to="#home">Home</HashLink>
          <HashLink smooth to="#about">About Us</HashLink>
          <HashLink smooth to="#products">Products</HashLink>
          <HashLink smooth to="#blog">Blog</HashLink>
          <HashLink smooth to="#contact">Contact Us</HashLink>
      </nav>
    </header>
  )
}

export default Header