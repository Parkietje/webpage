const siteAddress = new URL("https://www.yannichiodi.space")
module.exports = {
  siteMetadata: {
    title: "Portfolio Website",
    author: "parkietje",
    description: "A stylish portfolio website made with Gatsby.js"
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
        icon: 'src/images/diamond-logo.png', // This path is relative to the root of the site.
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
