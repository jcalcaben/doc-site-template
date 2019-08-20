import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Body = ({ data }) => {
  return (
    <main>
      <MDXRenderer>{data.body}</MDXRenderer>
    </main>
  )
}

export default Body
