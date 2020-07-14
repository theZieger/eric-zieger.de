import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.css"

const Header = () => (
  <header className={styles.header} role="banner">
    <nav className={styles.inner}>
      <Link className={styles.homeLink + " u-url"} rel="me" to="/">
        Eric Zieger
      </Link>
    </nav>
  </header>
)

export default Header
