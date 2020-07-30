import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.css"

const Header = () => (
  <header className={"layout-block " + styles.header} role="banner">
    <nav>
      <Link className={styles.homeLink} to="/">
        <img width="32" height="32" className={styles.logo} src="/icons/icon-96x96.png" alt="" />
        Eric Zieger
      </Link>
    </nav>
  </header>
)

export default Header
