import React from "react"
import { Link } from "gatsby"

import { header, homeLink, logo } from "./Header.module.css"

const Header = () => (
  <header className={"layout-block " + header} role="banner">
    <nav>
      <Link className={homeLink} to="/">
        <img
          width="32"
          height="32"
          className={logo}
          src="/icons/icon-96x96.png"
          alt=""
        />
        Eric Zieger
      </Link>
    </nav>
  </header>
)

export default Header
