import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CartProduct from '../cartProduct/CartProduct';
import Managin from '../Managing/Managin';
import Seller from '../Seller/Seller';

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
            <Banner></Banner>
            <h1 className='text-center text-primary my-5'>Available Stock Product</h1>
           <div className='row gy-3'>
       
            {
                products.slice(0,6).map(product=><CartProduct
                key={product._id}
                product={product}
                >
                </CartProduct>)
            }
          
           </div>
           <Managin></Managin>
           <Seller></Seller>
        </div>
    );
};

export default Home;