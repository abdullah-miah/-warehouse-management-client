import { Button } from 'bootstrap';
import React from 'react';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartProduct = ({product}) => {
    const {name, description, image, price, quantity, supplier}= product;
    return (
        <div className='col-lg-4 col-sm-4'>
<Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description.slice(0,80)}
      </Card.Text>
      <Card.Title><p> Supplier: {supplier}</p></Card.Title>
      <Card.Title><p> Quantity: {quantity}</p></Card.Title>
      <Card.Title><p className='text-success'> Price: {price}</p></Card.Title>
     <button className='btn btn-primary mb-3 mx-5 w-75'>Deliver</button> 
     <br/>
     <button className='btn btn-info mx-5 w-75'>
      <Link to='/management'>Manage</Link>

     </button>
    </Card.Body>
    
  </Card>

        </div>
    );
};

export default CartProduct;