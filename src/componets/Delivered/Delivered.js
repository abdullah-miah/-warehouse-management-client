import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Delivered = () => {
    const navigate = useNavigate();
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        const fatchData = async ()=>{
            const {data}= await axios.get('http://localhost:5000/management');
            setProducts(data.data);
            console.log(data)
        }
        fatchData();
    },[]);
    return (
        <div>
            <h1>Delivered page</h1>
        </div>
    );
};

export default Delivered;