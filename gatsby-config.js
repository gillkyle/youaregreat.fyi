module.exports = {
  siteMetadata: {
    title: "You Are Great"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "You Are Great",
        short_name: "You Are Great",
        start_url: "/",
        icon: "src/images/star.png"
      }
    }
  ]
};
