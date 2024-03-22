import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>About Me</h1>
      <p>I am interested in technology, security, AI, and automation.  I like taking on difficult challenges, and I can help solve technology problems.  Please reach out via social media or email if you have any questions or opportunities.</p>
      <a href={"/resume-steve-2024.pdf"}>resume pdf</a>
      <br />
      <hr />
      <StaticImage
        formats={["auto", "webp", "avif"]}
        src="../images/mtb.png"
        width={325}
        height={325}
        quality={95}
        alt="Linkedin icon"
      />

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
