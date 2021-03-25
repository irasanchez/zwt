module.exports = {
  siteMetadata: {
    title: 'Zero Waste Alternative',
    titleTemplate: '',
    url: 'https://zerowastealternative.to',
    siteUrl: 'https://zerowastealternative.to',
    description:
      'Find zero waste, plastic-free, recycled, and/or compostable alternatives to everyday items.',
    image: '',
    owner: 'Ira Sanchez',
    twitterUsername: '',
    facebookAppID: '',
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/mainicon.svg',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
