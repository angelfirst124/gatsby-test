import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
    return (
      <Layout pageTitle="Dashboard">
        <p>It is the enjoying time</p>
        <StaticImage
          alt="Clifford,"
          src="../images/images.jpg"
        >
        </StaticImage>
      </Layout>
    )
}

export default IndexPage
