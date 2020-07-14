import React from "react"
import Div100vh from "react-div-100vh"
import SEO from "../SEO"
import Header from "../Header"
import Footer from "../Footer"
import "./global.css"

const Layout = ({ children, lang }) => {
  return (
    <Div100vh className="full">
      <SEO lang={lang} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Div100vh>
  )
}

export default Layout
