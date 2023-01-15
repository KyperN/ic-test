import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../ItemCard/ItemCard';
const ItemCards = ({ items }) => {
  console.log(items);
  const products = items.map(({ title, description, img, id }) => {
    return (
      <Col key={id} xs={4}>
        <ItemCard title={title} description={description} img={img} id={id} />
      </Col>
    );
  });
  return (
    <Container className="mt-5">
      <Row>{products}</Row>
    </Container>
  );
};

export default React.memo(ItemCards);
