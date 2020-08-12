import React from 'react';
import {  NavLink,  } from 'react-router-dom';
import colors from '../constants/colors';

export default function Navbar(props) {

    return (
        <nav className="navbar">
                <NavLink exact activeStyle= {Links.activeLink} to ="/" onClick={() =>{props.setVisible(false); props.setType('popular')}} style={Links.linkStyle}>Home</NavLink>
                <NavLink to="/topRated" activeStyle= {Links.activeLink} onClick={() =>{props.setVisible(false); props.setType('topRated')}} style={Links.linkStyle}> Top Rated Movies</NavLink>
                <NavLink to="/about" style={Links.linkStyle} activeStyle= {Links.activeLink} > About</NavLink>
                <NavLink  to="/Login" activeStyle= {Links.activeLink}  style={Links.linkStyle}>Login</NavLink>
        </nav>
        
    )
}


const Links= {

    activeLink :{
    fontWeight:"bold",
    color:colors.warning,
    transform:"scale(1.3)"
    },
    linkStyle:{
        textDecoration:"none",
        color:"#333",
        transition:"all ease 0.3s"
    },
}