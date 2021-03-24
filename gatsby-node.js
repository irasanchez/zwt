const { products } = require('./src/assets/data');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  products.forEach((product) => {
    
    createPage({
      path: `/${product.name}`,
      component: require.resolve(`./src/templates/product-template.js`),
      context: { product },
    });
  });
};
