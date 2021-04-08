import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Drinko Farm</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page"><Link to="/home">Home</Link></a>
                        <a class="nav-link"><Link to="/login">Login</Link></a>
                        <a class="nav-link"><Link to="/book/:id">Bookings</Link></a>
                        <a class="nav-link"><Link to="/orders">My Orders</Link></a>
                        <a class="nav-link"><Link to="/admin">Admin</Link></a>
                        <a class="nav-link">Name: {loggedInUser.name}</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;