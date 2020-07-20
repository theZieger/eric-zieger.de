import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.css"

const Header = () => (
  <header className={"layout-block " + styles.header} role="banner">
    <nav>
      <img className={styles.logo} src="/favicon-32x32.png" alt="" />
      <Link className={styles.homeLink} to="/">
        Eric Zieger
      </Link>
    </nav>
  </header>
)

export default Header
