import React from "react"

import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

export default ({ data: { mdx } }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{mdx.frontmatter.title}</title>
      </Helmet>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  )
}

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
