module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
          {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'pages',
      },
    },
     {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img`,
      path: `${__dirname}/src/Resources/Tutorials/Screenshots/`
     }
    },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-remark`,
           ],
    
}
