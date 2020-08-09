const fs = require(`fs`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const puppeteer = require("puppeteer")

async function createShareImage(slug, title, excerpt) {
  const folder = slug.split("/")[1]
  if (!fs.existsSync("./static/" + folder)) {
    fs.mkdirSync("./static/" + folder)
  }
  if (!fs.existsSync(`./static${slug}`)) {
    fs.mkdirSync(`./static${slug}`)
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1200,
      height: 630,
    },
  })
  const page = await browser.newPage()
  await page.goto(
    `file://${__dirname}/social-card.html?slug=${slug}&title=${title}&excerpt=${excerpt}`,
    { waitUntil: "networkidle0" }
  )
  await page.screenshot({
    path: `./static${slug}social-card.png`,
    type: "png",
    omitBackground: true,
  })
  await browser.close()
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const WritingTemplate = path.resolve(`./src/templates/Writing.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 160)
              fields {
                slug
              }
              frontmatter {
                title
                description
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index]
    const slug = post.node.fields.slug
    const title = post.node.frontmatter.title
    const excerpt = post.node.frontmatter.description || post.node.excerpt
    await createShareImage(slug, title, excerpt)
  }

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: WritingTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
