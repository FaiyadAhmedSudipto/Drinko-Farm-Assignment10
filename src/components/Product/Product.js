import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import "./Product.css"

const Product = ({ event }) => {
    // const deleteEvent = id => {}
    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/book/${_id}`);
    }
    return (
        <div className='col-md-4'>
            <div id='leagueStyle' className="productPage">
                <div className="card-body">
                    <img style={{ height: '210px' }} src={event.imageURL} alt="" />
                    <h5 class="text-dark">{event.productName}</h5>
                    <h5 class="text-dark">{event.price}</h5>
                    <button class="btn btn-outline-primary" onClick={() => handleBook(event._id)}>Book</button>
                </div>
            </div>
        </div>
    );
};

export default Product;