import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Management = () => {
    const [products, setProducts] =useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fatchData = async ()=>{
            const {data}= await axios.get('http://localhost:5000/management');
            setProducts(data.data);
        }
        fatchData();
    },[]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
       const url = `http://localhost:5000/management/${id}`
       fetch(url, {
           method: 'DELETE'
       }) 
       .then(res => res.json())
       .then(data =>{
           console.log(data);
           const remaining = products.filter(product => product._id !== id);
           setProducts(remaining);
       })
    }
    }
    const handelUpdeted = (id)=>{
      navigate(`/updatedProducts/${id}`)
    }
   
    const addProducts =()=>{
      navigate('/addProduct')
    }
    
    return (

        <div className='w-75 mx-auto'>
          <div className="text-center my-5">
      <button onClick={addProducts} type="button" className="btn btn-success text-white w-25">AddProducts</button>
    </div>
            <h1 className='text-center text-primary my-3'>Product Management</h1>
            <Table  striped bordered hover>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Description</th>
      <th>image</th>
      <th>Price</th>
      <th>Supplier</th>
      <th>Quantity</th>
      <th>Deliver</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    
    {
        products.map(product =>{
            return(
                <tr key={product._id}>
      <td>{product.name}</td>
      <td>{product.description.slice(0,40)}</td>
      <td><img style={{width: '50px'}} src={product.image}></img></td>
      <td>{product.price}</td>
      <td>{product.supplier}</td>
      <td>{product.quantity}</td>
      <td>{product.supplier}</td>
      <td  className='text-primary'>
     <FontAwesomeIcon className='fs-3' style={{margin: '0px 0px 0px 10px'}} onClick={()=>handelUpdeted(product._id)} icon={faEdit} />
        </td>
      <td className='text-danger'><FontAwesomeIcon className='fs-3' style={{margin: '0px 0px 0px 10px'}} icon={faTrash} onClick={()=>handleDelete(product._id)}></FontAwesomeIcon></td>
      
    </tr>
            )
        })
    }
  </tbody>
</Table>

            
        </div>
    );
};

export default Management;