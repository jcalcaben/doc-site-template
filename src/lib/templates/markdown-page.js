import React from "react"
import { graphql } from "gatsby"

import { App } from "../components"

export default ({ data: { mdx } }) => {
  return <App data={mdx} />
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
