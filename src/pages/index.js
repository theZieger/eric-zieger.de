import React from "react"
import Layout from "../components/Layout"
import Elevator from "../components/Elevator"
import { Link, graphql } from "gatsby"

import styles from "./index.module.css"
import Image from "gatsby-image"

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Elevator />
      <section>
        <div className={styles.full}>
          <h2 className={styles.mainTitle}>Recent writings</h2>
          <div className={styles.stack + ' ' + styles.switcher}>
            {posts.map(({ node: { frontmatter, fields, excerpt } }) => {
              const title = frontmatter.title
              const content = frontmatter.description || excerpt
              const imageData = frontmatter.image.childImageSharp.fluid

              return (
                <article className={styles.card} key={fields.slug}>
                  <Image className={styles.image} fluid={imageData} />
                  <header>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.meta}>
                      <small>{frontmatter.date}</small>
                    </div>
                  </header>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  />
                  <Link className={styles.link} to={fields.slug}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentcolor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="13" y1="18" x2="19" y2="12" />
                      <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                    <span className="sr-only">{title}</span>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          tableOfContents
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid (maxWidth: 527, maxHeight: 108, background: "rgba(255,255,255,1)", quality: 40) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }

`
