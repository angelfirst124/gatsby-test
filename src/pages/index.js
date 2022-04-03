import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <title>home page</title>
      <h1>Welcome to Gatsby</h1>
      <p>Please enjoy</p>
      <Link to="/about">about</Link>
    </main>
  )
}

export default IndexPage
