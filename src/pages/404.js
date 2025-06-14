import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>🔍 404: Page Not Found</h1>
      <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
        <p>Looks like you've ventured into uncharted territory! The page you're looking for seems to have disappeared into the digital void.</p>
        
        <h2>🤔 What happened?</h2>
        <ul>
          <li>The URL might be mistyped</li>
          <li>The page may have been moved or deleted</li>
          <li>You clicked on a broken link</li>
          <li>The robots have become self-aware and are hiding content</li>
        </ul>

        <h2>🚀 Where to go from here?</h2>
        <ul>
          <li><a href="/">Go back to the homepage</a></li>
          <li><a href="/about">Learn more about me</a></li>
          <li>Check out the <a href="/rss.xml">RSS feed</a> for latest posts</li>
          <li>Or just enjoy this ASCII router while you're here:</li>
        </ul>

        <pre style={{ 
          backgroundColor: "var(--color-background-tertiary)", 
          padding: "16px", 
          borderRadius: "6px",
          fontSize: "14px",
          fontFamily: "var(--fontFamily-mono)",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
          overflow: "auto"
        }}>
{`    ┌─────────────────────┐
    │  ○ ○ ○    ROUTER    │
    │                     │
    │  [PWR] [SYS] [WAN]  │
    │   ●     ○     ●     │
    │                     │
    │  LAN  [○][○][○][○]  │
    └─────────────────────┘`}
        </pre>
        
        <p><em>Don't worry, even network packets get lost sometimes! 📦</em></p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
