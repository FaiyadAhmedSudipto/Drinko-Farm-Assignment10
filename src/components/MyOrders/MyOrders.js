import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import "./MyOrder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://calm-fjord-86946.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    const removeProduct = (id) => {
        // console.log(id)
        fetch(`https://calm-fjord-86946.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted")
            })
    }

    return (
        <div>
            <Header />
            <div className="myOrderPage">
                <h3>You ordered {bookings.length} products</h3>

                {
                    bookings.map(book =>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Product Name: {book.productName}</li>
                            <li class="list-group-item">Price: {book.price}</li>
                            <li class="list-group-item">Quantity: {book.quantity}</li>
                            <li class="list-group-item">Ordered Date:- {(new Date(book.checkIn).toDateString('dd/MM/yyy'))}</li>
                            <button onClick={() => removeProduct(book._id)}  class="btn btn-light"><FontAwesomeIcon icon={faMinusCircle} />Remove</button>
                        </ul>)
                }
            </div>
        </div>
    );
};

export default MyOrders;