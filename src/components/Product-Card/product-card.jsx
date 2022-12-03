import React from 'react';
import './product-card.css';

const Product = () => (
    <div className = 'product-card-container'>

        <div className = 'image-container'>
         {/* <img src={whiteLogo} alt="Logo" className='white-logo'/>   */}
        </div>
        
        <div className='product-card-info'>
            <h1> Product Title </h1>
            <h2> $Price.00 </h2>
        </div>

        <div className='add-to-cart-btn'>
        </div>

    </div>
    

);
export default(Product)