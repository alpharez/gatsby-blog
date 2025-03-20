/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <Link to="/about/"><strong>{author.name}</strong></Link><br /> {author?.summary || null}
          {` `}<br/>
          <Link to="https://github.com/alpharez">
            <StaticImage
              formats={["auto", "webp", "avif"]}
              src="../images/github.svg"
              width={25}
              height={25}
              quality={95}
              alt="Github icon"
            />
          </Link>
          &nbsp;
          <Link to ="https://www.linkedin.com/in/steve3279/">
            <StaticImage
              formats={["auto", "webp", "avif"]}
              src="../images/linkedin.svg"
              width={25}
              height={25}
              quality={95}
              alt="Linkedin icon"
            />
          </Link>
          &nbsp;
          <Link to ="https://netpros.online/@steve/" rel="me">
            <StaticImage
              formats={["auto", "webp", "avif"]}
              src="../images/logo-purple.svg"
              width={25}
              height={25}
              quality={95}
              alt="Mastodon icon"
            />
          </Link>
        </p>
      )}
    </div>
  )
}

export default Bio
