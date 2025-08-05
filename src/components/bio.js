import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div style={{ marginBottom: `2.5rem` }}>
      <p>
        Written by <strong>{author.name}</strong> — {author.summary} <br />
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 12 }}
        >
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${social.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  )
}

export default Bio
