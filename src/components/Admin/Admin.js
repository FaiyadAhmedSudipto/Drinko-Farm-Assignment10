import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css";

const Admin = () => {
    return (
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Drinko Farm Admin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to="/home">Home</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to="/management">Management</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to="/addProducts">Add Products</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://web.programming-hero.com/" target="_blank">Follow Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://google.com" target="_blank">Learn More</a>
                </li>
            </ul>
        </div>
    );
};

export default Admin;