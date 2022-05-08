import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddProducts = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
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
      const NavigateToManagement = () =>{
          navigate('/management')
      }
    return (
        <div>
            <div className='w-75 mx-auto mt-4'>
            <h2 className='text-center text-primary '>Add Products</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <div>
                <div>
                    <label>Items Name</label>
                     <input  type='text' name='name' placeholder='Items name' required></input>
                    <label>Price</label>
                     <input type='text' name='price' placeholder='Price' required></input>
                    <label>Quantity</label>
                     <input type='text' name='quantity' placeholder='Quantity' required></input>
                     <label>Supplier Name</label>
                     <input type='text' name='supplier' placeholder='Supplier Name' required></input>
                     <label>Image Link</label>
                     <input type='text' name='image' placeholder='Image Link' required></input>
                    <label> Short Description</label>
                     <textarea name='description' cols='50' rows='5' required>
                        write some description 
                     </textarea>
                     <br/>
                     {/* <button
                     disabled={!agree}
                    className='btn btn-primary mt-3 '>Confirm Booking</button> */}
                    <input  type='submit' value='Add Product'></input>
                </div>
            </div>
             
            </form>
        </div>
        </div>
        
    );
};

export default AddProducts;