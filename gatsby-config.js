/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pranish Biswakarma | Full Stack & Cybersecurity`,
    author: {
      name: `Pranish Biswakarma`,
      summary: `Full Stack Developer & Cybersecurity Enthusiast 🚀 Building next-gen apps and securing digital frontiers.`,
    },
    description: `Showcasing my work in full stack development, app development, and cybersecurity. Projects, tutorials, and insights.`,
    siteUrl: `https://pranishbiswakarma.dev/`, // Replace this with your deployed URL later
    social: {
      twitter: `pranishbiswakarma`,   // Add your Twitter handle or remove
      github: `PranishBiswakarma`,
      linkedin: `pranishbiswakarma`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          // You can add more remark plugins here for code highlighting, etc.
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Pranish Biswakarma Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pranish Biswakarma Portfolio`,
        short_name: `PranishDev`,
        start_url: `/`,
        background_color: `#0a192f`, // Deep navy for modern look
        theme_color: `#64ffda`,      // Vibrant teal accent color
        display: `minimal-ui`,
        icon: `src/images/pranish-icon.png`, // Replace with your logo or remove if none
      },
    },
    `gatsby-plugin-react-helmet`, // Allows you to control document head for SEO
    // Add more plugins as needed here for SEO, sitemap, offline, analytics, etc.
  ],
}
