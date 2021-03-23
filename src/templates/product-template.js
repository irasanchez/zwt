import React from 'react';
import { Link } from 'gatsby';
import Product from '../components/Product';
import Layout from '../components/Layout';

export default function ProductTemplate({ pageContext: { product } }) {
  return (
    <Layout>
      {/* include header later */}
      <Product product={product} />
      {/* include footer later */}
    </Layout>
  );
}
