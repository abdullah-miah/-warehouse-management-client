import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddProducts = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/management')
        const product = {
          name: e.target.name.value,
          price: e.target.price.value,
          quantity: e.target.quantity.value,
          supplier: e.target.supplier.value,
          image: e.target.image.value,
          description: e.target.description.value,
          
        };
        e.target.reset();
    const {data} = await axios.post("http://localhost:5000/products", product);
    console.log(data);
    if(!data.success){
           return toast.error(data.error)
       }
       toast.success(data.message);
     
      };
     
    return (
        <div>
            <div className='container'>
            <div className='bg-light border pb-3 mt-3'>
                <div className='w-100 mx-auto mt-4 '>
            <h2 className='text-center text-primary '>Add Products</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                    <div className='row gx-5'>
                        <div className='col-lg-6 col-sm-6'>
                        <label>Items Name</label>
                     <input  type='text' name='name' placeholder='Items name' required></input>
                    <label>Price</label>
                     <input type='text' name='price' placeholder='Price' required></input>
                    <label>Quantity</label>
                     <input type='text' name='quantity' placeholder='Quantity' required></input>
                     <label>Supplier Name</label>
                     <input type='text' name='supplier' placeholder='Supplier Name' required></input>
                        </div>
                        <div className='col-lg-6 col-sm-6 mt-5'>
                        <label>Image Link</label>
                     <input type='text' name='image' placeholder='Image Link' required></input>
                    <label> Short Description</label>
                     <textarea name='description' cols='40' rows='5' required>
                        write some description 
                     </textarea>
                     <br/>
                    <input className='btn btn-info mt-5'  type='submit' value='Add Product'></input>
                        </div>
                    </div>
                    
               
                     
                     
            </form>
        </div>
                
            </div>
        </div>
        </div>
        
    );
};

export default AddProducts;