import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="yamaha-dealer" />
    <h1>Hi from the yamaha dealer page</h1>
    <p>Welcome to yamaha dealer</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
