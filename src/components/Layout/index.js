import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"
import "./global.css"

const Layout = ({ children }) => {
  return (
    <div className="h-card">
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
