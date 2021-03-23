import React from 'react';
import { Link } from 'gatsby';

export default function ProductTemplate({ pageContext: { product } }) {
  return (
    <>
      <header>
        <h1>{product.name}</h1>
      </header>
      <section>
        <h2>Sources</h2>
        {
          product.sources.map((source) => (
            <div key={source.url}>
              <Link to={source.url}>
                <h3>{source.title}</h3>
                <section>
                  <img src={source.img} alt={source.imgAlt} />
                  <p>{source.description}</p>
                </section>
              </Link>
            </div>
          ))
          // include description and image later
        }
      </section>
    </>
  );
}

// example:

// import React, { FC } from 'react';
// import { GatsbySeo } from 'gatsby-plugin-next-seo';

// const Layout: FC = ({ children }) => (
//   <>
//     <GatsbySeo
//       title='Using More of Config'
//       description='This example uses more of the available config options.'
//       canonical='https://www.canonical.ie/'
//       openGraph={{
//         url: 'https://www.url.ie/a',
//         title: 'Open Graph Title',
//         description: 'Open Graph Description',
//         images: [
//           {
//             url: 'https://www.example.ie/og-image-01.jpg',
//             width: 800,
//             height: 600,
//             alt: 'Og Image Alt',
//           },
//           {
//             url: 'https://www.example.ie/og-image-02.jpg',
//             width: 900,
//             height: 800,
//             alt: 'Og Image Alt Second',
//           },
//           { url: 'https://www.example.ie/og-image-03.jpg' },
//           { url: 'https://www.example.ie/og-image-04.jpg' },
//         ],
//         site_name: 'SiteName',
//       }}
//       twitter={{
//         handle: '@handle',
//         site: '@site',
//         cardType: 'summary_large_image',
//       }}
//     />
//     <div>{children}</div>
//   </>
// );
// export default Layout;

// more: https://www.gatsbyjs.com/plugins/gatsby-plugin-next-seo/?=seo#setup
