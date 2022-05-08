import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartProduct from '../cartProduct/CartProduct';

const Home = () => {
    const [products, setProducts] =useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fatchData = async ()=>{
            const {data}= await axios.get('http://localhost:5000/management');
            setProducts(data.data);
        }
        fatchData();
    },[]);
    return (
        <div className='container w-75'>
            <h1>Available Stock Product</h1>
           <div>
           <Container>
  <Row>
    
    {
                products.map(product=><CartProduct
                key={product._id}
                product ={product}
                ></CartProduct>)
            }
           
  
    
  </Row>
</Container>
          
            
            
        </div>
        </div>
    );
};

export default Home;