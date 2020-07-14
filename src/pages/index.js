import React from "react"
import Layout from "../components/Layout"
import Elevator from "../components/Elevator"

//import styles from "./index.module.css"

export default function Index(props) {
  // const title = "TIL: JavaScript's Reflect object"
  return (
    <Layout lang="en">
      <Elevator />
      {/* <section>
        <div className={styles.grid}>
        <div className={styles.card}>
            <svg
            style={{transform: `translate(-25%, -25%) rotate(${title.charCodeAt(3) * 100}deg)`}}
              className={styles.blob}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#10da75"
                d="M155 35c14 12 23 31 26 51 4 19 1 40-9 53-11 13-30 19-48 25-18 5-35 10-54 8-18-2-37-12-43-28-7-15-1-35 3-56 4-20 7-40 18-53 12-12 32-18 52-18s40 6 55 18z"
              />
            </svg>
            <h2 className={styles.title}>TIL: JavaScript's Reflect object</h2>
            <div className={styles.meta}>
              <div>Today I learned</div>
              <div>2020/05/18</div>
            </div>
            <p className={styles.text}>
              Reflect is a built-in object that provides methods for
              interceptable JavaScript operations. The methods are the same as
              those of proxy handlers. Reflect is not a function object, so it's
              not constructible.
              <br />
              <br />
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect">
                MDN web docs
              </a>
            </p>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}
