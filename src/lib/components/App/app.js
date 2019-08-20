import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"
import Body from "../Body"
import Footer from "../Footer"

const App = ({ data }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.frontmatter.title}</title>
      </Helmet>
      <div>
        <Header />
        <Body data={data} />
        <Footer />
      </div>
    </Fragment>
  )
}
export default App
