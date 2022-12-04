import React from 'react';
import './product-card.css';

const Product = ({item}) => {
    return(
        <div className = 'product-card-container'>
            <div className = 'image-container'>
                {/* <img src={whiteLogo} alt="Logo" className='white-logo'/>   */}
            </div>
            
            <div className='product-card-info'>
                <h3 className="product-title">{item.title}</h3>
                <h3 className="product-price">{item.price}</h3>
            </div>

            <div className='add-to-cart-btn'>
                <button className="add-to-cart-btn-container">
                    <h1 className="add-to-cart-btn-text">Add to Cart</h1>
                </button>
            </div>
        </div>
    )
}
export default(Product);