import React from 'react';
import './edit-product.css';

const EditProduct = ({item}) => {
    return(
        <div className = 'edit-card-container'>
            <div className='edit-card-info'>
                <label className="edit-title">{item.title}</label>
                <label className="edit-price">{item.price}</label>
            </div>

            <div className='edit-btn'>
                <button>
                    <h1 className="edit-btn-text">Edit</h1>
                </button>
            </div>

        </div>
    )
}
export default(EditProduct);