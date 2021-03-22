exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const products = [
    {
      id: '1',
      name: 'toothbrush',
    },
  ];

  products.forEach((product) => {
    createPage({
      path: `/${product.name}`,
      component: require.resolve(`./src/templates/product-template.js`),
      context: { product },
    });
  });
};
