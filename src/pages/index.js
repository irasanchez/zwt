import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Search from '../components/Search';

export default function Home() {
  return (
    <>
      <Helmet></Helmet>
      <Layout>
        <main>
          Find Zero Waste Alternatives to anything you need. Or, at least
          confirm that that product does not yet exist instead of endlessly
          searching.
          <Search />
        </main>
      </Layout>
    </>
  );
}
