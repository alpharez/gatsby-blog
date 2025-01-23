import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>About Me</h1>
      <Bio />
      <p>I am interested in technology, security, AI, and automation.  I like taking on difficult challenges, and I can help solve technology problems.  Please reach out via social media or email if you have any questions or opportunities.</p>
      <a href={"/resume-steve-2025.pdf"}>resume pdf</a>
      <br />
      <hr />

    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
