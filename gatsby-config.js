require('dotenv').config()

module.exports = {
  pathPrefix: '/feedgator',
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `ONEGRAPH`,
        fieldName: `oneGraph`,
        url: `https://serve.onegraph.com/dynamic?app_id=${process.env.ONEGRAPH_KEY}`
      }
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
         classNameDark: "dark-mode",
         classNameLight: "light-mode",
         storageKey: "darkMode",
         minify: true,
      },
    }
  ]
}
