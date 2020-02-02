const path = require('path')

module.exports = {
  pathPrefix: `/minecraft-server-list-frontend`,

  siteMetadata: {
    title: `Minecraft Server List`,
    description: `Stylish list of Minecraft servers.`,
    author: `Kamil Twardowski <hello@verlikylos.dev>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minecraft-server-list`,
        short_name: `mclist`,
        start_url: `/`,
        background_color: `#261b13`,
        theme_color: `#261b13`,
        display: `minimal-ui`,
        icon: `src/images/minecraft/bookshelf.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@utils": path.resolve(__dirname, 'src/utils'),
          "@components": path.resolve(__dirname, 'src/components'),
          "@images": path.resolve(__dirname, 'src/images'),
          "@fonts": path.resolve(__dirname, 'src/fonts')
        },
        extensions: []
      }
    }
  ],
}
