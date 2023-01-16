import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { useParams } from 'react-router';

const products = require('../../misc/products.json');

const ItemInfo = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { title, description } = product;
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
