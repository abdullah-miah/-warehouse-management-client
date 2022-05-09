import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Managin = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-success mb-5'>Hub Management</h1>
            <div className='row gy-3'>
                <div className='col-lg-4 col-sm-4 '>
                <img style={{width: '250px'}} src={'https://t4.ftcdn.net/jpg/04/21/45/51/360_F_421455125_uq2szZSTeL8LoFZ6QJPBt95Hz8xDgECQ.jpg'}></img>
                <h3>Inventory Management</h3>
                <p>Smart Hub inventory management is absoultly nice and safe account system.inventory management employee always try her best in her working time </p>
                </div>
                <div className='col-lg-4 col-sm-4 '>
                <img style={{width: '250px'}} src={'https://assets-global.website-files.com/59b85cfc56db830001760b29/60b8e00aeb53ce79b0de7b74_rsz_order_management.jpg'}></img>
               <h3> Order Management</h3>
                <p>Smart Hub inventory management is absoultly nice and safe account system.inventory management employee always try her best in her working time </p>
                </div>
                <div className='col-lg-4 col-sm-4 '>
                <img style={{width: '250px', height: '250px'}} src={'https://www.soundandcommunications.com/wp-content/uploads/2019/11/Data-Ana.jpg'}></img>
                <h3> Report Analytics</h3>
                <p>Smart Hub inventory management is absoultly nice and safe account system.inventory management employee always try her best in her working time </p>
                </div>

            </div>
            
        </div>
    );
};

export default Managin;