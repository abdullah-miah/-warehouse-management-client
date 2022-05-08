import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Delivered = () => {
   const {id}= useParams()
   const [products, setProducts] = useState({});
   useEffect(()=>{
    const url =`http://localhost:5000/management/${id}`;   
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data));
           },[])
    //  const handleDeliver = (e) =>{
    //  const deliveredQuantity = e.target.quantity.value;
    //  console.log(deliveredQuantity);
     
    //  } 
const handleDeliver = async (e) => {
    e.preventDefault();
    const quantity = {
      quantity: e.target.quantity.value, 
    };
    alert('Successfully Deliverd product')
    e.target.reset();
    const ulr = `http://localhost:5000/management/${id}`;
    fetch(ulr, {
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(quantity)
    })
    }
    return (
        <div>
            <div className='container border mt-3'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                      <img src={products.image}></img>
                    </div>
                    
                    <div style={{margin: '150px 0px'}} className='col-lg-6 col-sm-6'>
                     <h3>Name: {products.name}</h3>
                     <p> {products.description}</p>
                     <p>Supplier:{products.supplier}</p>
                     <p>Quantity: {products.quantity}</p>
                     <p>Price: {products.price}</p>
                     <div className='mt-3'>
                     <form onSubmit={handleDeliver} >
                     <input className='w-25' type='text' name='quantity' placeholder='Quantity' required></input>
                         <input className='btn btn-success w-25 mx-3' type='submit' value='Deliver'></input>
                     </form>
                     </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Delivered;