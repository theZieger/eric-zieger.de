import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from "./Writing.module.css"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const format = dateString => {
  const date = new Date(dateString)
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const WritingTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="h-entry">
        <div>
          <header>
            <h1 className={styles.title + " p-name"}>
              {post.frontmatter.title}
            </h1>
            <div className={styles.meta}>
              <a href="" className="u-url">
                <time className="dt-published" datetime={post.frontmatter.date}>
                  {format(post.frontmatter.date)}
                </time>
              </a>
              <span>{post.timeToRead} minute read</span>
            </div>
          </header>
          <div
            className={styles.content + " e-content"}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className={styles.footer}>
            <Bio />

            {(previous || next) && (
              <nav>
                <ul className={styles.more}>
                  <li>
                    {previous && (
                      <Link
                        className="link"
                        to={"/writing" + previous.fields.slug}
                        rel="prev"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.icon}
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentcolor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <line x1="5" y1="12" x2="11" y2="18" />
                          <line x1="5" y1="12" x2="11" y2="6" />
                        </svg>{" "}
                        {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link
                        className="link"
                        to={"/writing" + next.fields.slug}
                        rel="next"
                      >
                        {next.frontmatter.title}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.icon}
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
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            )}
          </footer>
        </div>
      </article>
    </Layout>
  )
}

export default WritingTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
      timeToRead
    }
  }
`
