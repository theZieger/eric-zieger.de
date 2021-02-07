import React from "react"

import styles from "./Footer.module.css"

export default () => {
  return (
    <footer className={"layout-block " + styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.address}>
          <div className={styles.column}>
            <h2 className={styles.title}>About this site</h2>
            <p>
              {"Welcome to my shiny personal website. I'm "}
              <a
                href="https://eric-zieger.de"
                rel="me"
                className="u-url p-name"
              >Eric Zieger</a>
              {", a "}
              <strong className="p-job-title">Frontend Developer</strong>
              {" from Germany"}
              <span aria-hidden="true"> 🇩🇪</span>.
            </p>
          </div>
          <div className={styles.column}>
            <h2 className={styles.title}>Socialize</h2>
            <ul>
              <li>
                <a
                  href="https://twitter.com/thezieger"
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="link"
                >
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path
                      d="M23.6 2.2a1 1 0 0 0-1.1 0c-.7.5-1.5.9-2.3 1.2a5.5 5.5 0 0 0-7.2-.1 5.5 5.5 0 0 0-2 4.2 9.6 9.6 0 0 1-7.2-4.1c-.2-.3-.5-.4-.9-.4s-.7.3-.8.6C2 3.7 1 6.1 1.1 9a9.5 9.5 0 0 0 4.8 8c-1.5.7-3.2 1-4.9 1-.4 0-.9.3-1 .7s.1.9.5 1.1c2.5 1.4 5.2 2.1 7.7 2.1s4.9-.6 7.1-1.9c4.3-2.4 6.7-7 6.7-12.5V7c1-1.1 1.7-2.4 2-3.8a1 1 0 0 0-.4-1zM20.2 6c-.2.2-.3.6-.3.9l.1.6a12 12 0 0 1-5.7 10.8c-2.8 1.6-6.1 2-9.4 1.2 1.3-.4 2.5-.9 3.6-1.7.4-.2.5-.5.5-.9s-.3-.7-.6-.8c-5.8-2.6-5.6-7.5-5-10C5.6 8.3 8.7 9.6 12 9.5c.5 0 1-.5 1-1v-1c0-1 .4-2 1.2-2.7a3.5 3.5 0 0 1 4.9.3c.3.3.7.4 1 .3l.7-.2-.6.8z"></path>
                  </svg>
                  Follow me on Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/theZieger"
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="link"
                >
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path
                      d="M22.5 8.5c0-1.5-.5-2.8-1.4-4 .3-1.3.2-2.7-.3-3.9a.9.9 0 0 0-.6-.6c-.4-.1-1.7-.3-4.4 1.4-2.2-.5-4.5-.5-6.6 0C6.5-.3 5.2-.1 4.8 0c-.3.1-.5.3-.6.6a5.3 5.3 0 0 0-.3 3.9 6.7 6.7 0 0 0-1.4 4c0 5.4 3 7.1 5.8 7.7L8 18.1v.1c-2.1.4-2.8-.4-3.6-1.5-.5-.7-1.1-1.5-2.2-1.7-.5-.1-1.1.2-1.2.7s.2 1.1.7 1.2c.3.1.7.5 1.1 1 .9 1.2 2.2 2.8 5.2 2.4V22c0 .6.4 1 1 1s1-.4 1-1v-2.9-1c0-.7.2-1.3.7-1.8.3-.3.4-.7.2-1-.1-.4-.4-.6-.8-.7-2.9-.4-5.6-1.3-5.6-6 0-1.2.4-2.2 1.2-3.1.3-.3.3-.7.2-1-.3-.9-.3-1.7-.1-2.5.5.1 1.4.4 2.6 1.3.3.2.6.2.9.1a12 12 0 0 1 6.5 0c.3.1.6 0 .8-.1A8.3 8.3 0 0 1 19.2 2a4 4 0 0 1-.1 2.4c-.1.4-.1.8.2 1 .8.8 1.2 1.9 1.2 3.1 0 4.7-2.7 5.7-5.6 6-.4 0-.7.3-.8.7s0 .8.2 1c.5.5.7 1.2.7 1.9V22c0 .6.4 1 1 1s1-.4 1-1v-3.8a3 3 0 0 0-.3-1.9c2.4-.5 5.8-2.1 5.8-7.8z"></path>
                  </svg>
                  Find me on GitHub
                </a>
              </li>
              <li>
                <a
                  className="u-email link"
                  href="mailto:mail@eric-zieger.de?subject=Kontakt"
                  rel="me"
                >
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path
                      d="M20 3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 5h16c.4 0 .7.2.9.6L12 11.8 3.1 5.6c.2-.4.5-.6.9-.6zm16 14H4c-.6 0-1-.4-1-1V7.9l8.4 5.9.6.2.6-.2L21 7.9V18c0 .6-.4 1-1 1z"></path>
                  </svg>
                  Drop me an email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
