import React from "react"

import styles from "./Elevator.module.css"

export default () => {
  return (
    <section className={styles.elevator}>
      <div>
        <h2 className={styles.title}>
          Hey, I'm Eric! <span aria-hidden="true">✌️</span>
        </h2>
        <p className="p-note">
          I'm a <strong className="p-job-title">Frontend Developer</strong> from
          Leipzig, Germany<span aria-hidden="true"> 🇩🇪</span>. And I'm in love
          with declarative and component-driven frontends, CSS, design-systems,
          and accessibility. I currently work on the open cloud platform for
          energy supply companies at{" "}
          <a href="https://www.powercloud.de" className="org">
            powercloud GmbH
          </a>
          . Before that, I worked for 5 years at{" "}
          <a href="https://www.invia.de/">Invia Travel Germany GmbH</a>.
        </p>
      </div>
    </section>
  )
}
