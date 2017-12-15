import React from 'react';

import { NavLink } from 'react-router-dom';

// activeClassName --> class yg dipake sewaktu lg active

const Header = (props) => (
    <ul>
        <li><NavLink activeClassName="active" exact
            to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" 
            to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink activeClassName="active" 
            to="/cart">Cart</NavLink></li>
    </ul>
);

export default Header;