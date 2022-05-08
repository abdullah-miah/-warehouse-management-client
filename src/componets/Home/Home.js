import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1> Total Product: {products.length}</h1>
            
        </div>
    );
};

export default Home;