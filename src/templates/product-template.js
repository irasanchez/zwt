import React from 'react';

export default function ProductTemplate({ pageContext: { product } }) {
  return <section>{product.name}</section>;
}
