import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'
import ContactUs from './ContactUs/ContactUs'
import Products from './Products/Products'
import Blog from './Blog/Blog'

const Main = () => {
  return (
    <div>
        <Header />
        <Home />
        <AboutUs />
        <Products />
        <Blog />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Main