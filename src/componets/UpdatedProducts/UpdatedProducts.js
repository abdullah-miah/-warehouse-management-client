import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatedProducts = () => {
    const {id}= useParams()
   const [products, setProducts] = useState({});
   useEffect(()=>{
    const url =`http://localhost:5000/management/${id}`;   
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data));
           },[])
    return (
        <div>
            <h1>UpdatedProducts</h1>
        </div>
    );
};

export default UpdatedProducts;