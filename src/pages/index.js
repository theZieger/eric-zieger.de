import React from "react"
import Layout from "../components/Layout"
import Elevator from "../components/Elevator"
import { Link } from "gatsby"

import styles from "./index.module.css"

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Elevator />
      <section>
        <div>
          <h2>Recent writings</h2>
          <div className={styles.grid}>
            {posts.map(({ node: { frontmatter, fields, excerpt } }) => {
              const title = frontmatter.title || fields.slug
              const content = frontmatter.description || excerpt

              return (
                <article className={styles.card} key={fields.slug}>
                  <svg
                    style={{
                      transform: `translate(50%, -50%) rotate(${
                        title.charCodeAt(1) * 10 * Math.random()
                      }deg)`,
                    }}
                    className={styles.blob}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentcolor"
                      d="M139.5 28c9.2 8.9 12.6 24.5 20.3 37.6 7.7 13.1 19.9 23.7 19.9 34.4s-12 21.4-19.1 35.6c-7.2 14.1-9.4 31.6-18.7 36.7-9.3 5.1-25.6-2.1-42-1.9-16.5.3-33.1 8.1-44.6 4.2-11.5-3.8-17.9-19.3-25.7-33.7-7.7-14.3-16.9-27.6-18.2-41.6-1.2-14.1 5.3-28.8 13.5-42.5s17.9-26.4 30.7-33.3c12.7-7 28.6-8.2 44-7.5 15.5.6 30.6 3 39.9 12z"
                    />
                  </svg>
                  <header>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.meta}>
                      <small>{frontmatter.date}</small>
                    </div>
                  </header>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                  <Link className={styles.link} to={"/writing" + fields.slug}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class={styles.icon}
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentcolor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
