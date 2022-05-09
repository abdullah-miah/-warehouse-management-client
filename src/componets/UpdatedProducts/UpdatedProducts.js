import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatedProducts = () => {
    const {id} =useParams()
    const [products, setProducts] = useState({});
    const navigate = useNavigate();  
   useEffect(()=>{
    const url =`http://localhost:5000/updatedProducts/${id}`;   
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data));
           },[])
           const handleChange = event =>{
        const {price, ...rest} = products;
        const newPrice = event.target.value;
        const newProductPrice = {price: newPrice, ...rest};
        setProducts(newProductPrice);
    }
    const handleQuantityChange = event =>{
        const {quantity, ...rest}=products;
        const newQuantity = event.target.value;
        const newProductQuantity = { quantity: newQuantity, ...rest};
        setProducts(newProductQuantity);
    }
 
    const handelUpdeted = e =>{
        e.preventDefault();
        navigate('/management')
        const updateProduct = {
            price: e.target.price.value,
            quantity: e.target.quantity.value, 
          };
          e.target.reset();
          const url =`http://localhost:5000/updatedProducts/${id}`;  
          fetch(url, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateProduct)
        })
    }
    return (
        <div>
            <div className='container'>
            <div className='bg-light border pb-3 mt-3'>
                <div className='w-100 mx-auto mt-4 '>
            <h2 className='text-center text-primary '>Update Product Information</h2>
            <form onSubmit={handelUpdeted}  className='w-50 mx-auto'>
                    <div className='row gx-5'>
                        <div className='col-lg-6 col-sm-6'>
                        <label>Items Name</label>
                     <input readOnly disabled value={products.name}  type='text' name='name' placeholder='Items name' required></input>
                    <label>Price</label>
                     <input onChange={handleChange} value={products.price} type='text' name='price' placeholder='Price' required></input>
                    <label>Quantity</label>
                     <input onChange={handleQuantityChange} value={products.quantity} type='text' name='quantity' placeholder='Quantity' required></input>
                     <label>Supplier Name</label>
                     <input readOnly disabled value={products.supplier} type='text' name='supplier' placeholder='Supplier Name' required></input>
                        </div>
                        <div className='col-lg-6 col-sm-6 mt-5'>
                        <label>Image Link</label>
                     <input readOnly disbaled value={products.image} type='text' name='image' placeholder='Image Link' required></input>
                    <label> Short Description</label>
                     <textarea  readOnly disbaled value={products.description} name='description' cols='40' rows='5' required>
                        write some description 
                     </textarea>
                     <br/>
                    <input className='btn btn-info text-light mt-5'  type='submit' value='Update Product'></input>
                        </div>
                    </div>
                    
               
                     
                     
            </form>
        </div>
                
            </div>
        </div>
        </div>
    );
};

export default UpdatedProducts;