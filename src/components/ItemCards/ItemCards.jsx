import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../ItemCard/ItemCard';
const products = require('../../misc/products.json');
const ItemCards = () => {
  return (
    <Container>
      <Row>
        {products.map(({ title, description, img, id }) => {
          return (
            <Col key={id} xs={4}>
              <ItemCard
                title={title}
                description={description}
                img={img}
                key={id}
                id={id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemCards;
