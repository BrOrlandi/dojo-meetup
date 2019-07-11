module.exports = {
  siteMetadata: {
    title: 'Campinas Front-end',
    description: 'Projeto usado para fazer um meetup no Campinas Front-end',
    author: '@luanorlandi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Campinas Front-end',
        short_name: 'Campinas Front-end',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
  ],
};
