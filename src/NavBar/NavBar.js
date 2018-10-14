import React, { Component } from 'react';
import {NavLink }from 'react-router-dom';
import './NavBar.scss'

class NavBar extends Component {
    render () {
        return (
            <div className="text">
                <NavLink exact to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink to="/dashboard"><i className="fas fa-chart-line"></i></NavLink>
                <NavLink to="/reports"><i className="fas fa-columns"></i></NavLink>
            </div>
        );
    }
}

export default NavBar;