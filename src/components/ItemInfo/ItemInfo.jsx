import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { useParams } from 'react-router';

const ItemInfo = () => {
  const { id } = useParams();
  const products = require('../../misc/products.json');
  const product = products.filter((product) => product.id === id);
  const { title, description } = product[0];
  return (
    <div className="d-flex justify-content-center mt-50">
      <ItemCard
        title={title}
        description={description}
        id={id}
        premium={true}
      />
    </div>
  );
};

export default ItemInfo;
