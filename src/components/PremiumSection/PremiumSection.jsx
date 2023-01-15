import React from 'react';
import ItemCards from '../ItemCards/ItemCards';

const PremiumSection = () => {
  const products = require('../../misc/products.json');
  const premiumProducts = products.filter((product) => product.premium);
  return (
    <div>
      <h1>Welcome to premium</h1>
      <ItemCards items={premiumProducts} />
    </div>
  );
};

export default PremiumSection;
