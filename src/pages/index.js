import React from "react"
import Layout from "../components/Layout"
import Elevator from "../components/Elevator"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  full,
  mainTitle,
  stack,
  switcher,
  card,
  image,
  atitle,
  meta,
  text,
  link,
  icon,
} from "./index.module.css"

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Elevator />
      <section>
        <div className={full}>
          <h2 className={mainTitle}>Recent writings</h2>
          <div className={stack + " " + switcher}>
            {posts.map(({ node: { frontmatter, fields, excerpt } }) => {
              const title = frontmatter.title
              const content = frontmatter.description || excerpt
              const imageData =
                frontmatter.image.childImageSharp.gatsbyImageData

              return (
                <article className={card} key={fields.slug}>
                  <GatsbyImage image={imageData} className={image} />
                  <header>
                    <h3 className={atitle}>{title}</h3>
                    <div className={meta}>
                      <small>{frontmatter.date}</small>
                    </div>
                  </header>
                  <p
                    className={text}
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                  <Link className={link} to={fields.slug}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={icon}
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
  {
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
          tableOfContents
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 527
                  height: 108
                  backgroundColor: "rgba(255,255,255,1)"
                  quality: 40
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
