const siteAddress = new URL("http://www.parkietje.github.io")
const path = require('path')
module.exports = {
  pathPrefix: "/webpage",
  siteMetadata: {
    title: "parkietje webpage",
    author: "parkietje",
    description: "parkietje webpage"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/diamond-logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.yannichiodi.space',
        protocol: 'https',
        hostname: 'www.yannichiodi.space',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
