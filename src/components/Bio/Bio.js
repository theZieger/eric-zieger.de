/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "./Bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            handle
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <p className={styles.bio}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={`Portrait of ${author.name} (${author.handle})`}
        className={styles.image + " u-photo"}
      />
      <span>
        Written by{" "}
        <a href="https://eric-zieger.de/" className="link p-author h-card">
          Eric Zieger
        </a>{" "}
        (@thezieger) who is a{" "}
        <strong className="p-job-title">Frontend Developer</strong> currently
        working for{" "}
        <a className="link org" href="https://www.powercloud.de">
          powercloud GmbH
        </a>
        .
      </span>
    </p>
  )
}

export default Bio
