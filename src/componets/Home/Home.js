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
    console.log(products)
    return (
        <div className='container w-75'>
            <h1 className='text-center text-primary'>Available Stock Product</h1>
           <div className='row gy-3'>
       
            {
                products.slice(0,6).map(product=><CartProduct
                key={product._id}
                product={product}
                >
                </CartProduct>)
            }
          
           </div>
        </div>
    );
};

export default Home;