const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: "src/markdown-pages/",
    })

    createNodeField({
      node,
      name: "slug",
      value: relativePath,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/markdown-page.js`)
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle error
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: { id: node.id }, // additional data can be passed via context
    })
  })
}
