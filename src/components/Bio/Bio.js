/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { bio, image } from "./Bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100, quality: 100, layout: FIXED)
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
    <p className={bio}>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt={`Portrait of ${author.name} (${author.handle})`}
        className={image + " u-photo"}
      />
      <span>
        Written by{" "}
        <a href="https://eric-zieger.de/" className="link p-author h-card">
          Eric Zieger
        </a>{" "}
        ({author.handle}) who is a{" "}
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
