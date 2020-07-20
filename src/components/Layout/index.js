import React from "react"
import Div100vh from "react-div-100vh"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"
import "./global.css"

const Layout = ({ children }) => {
  return (
    <Div100vh className="full h-card">
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </Div100vh>
  )
}

export default Layout
