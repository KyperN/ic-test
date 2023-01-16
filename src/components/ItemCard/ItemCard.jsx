import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCard = ({ title, description, id, premium = false }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {!premium ? (
            <Link replace={true} to={`/product/${id}`}>
              <Button variant="primary">View details</Button>
            </Link>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
