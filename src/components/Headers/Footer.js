import React from 'react'
import '../../css/nav_bars.css'
import {NavLink} from "react-router-dom";
import {Grid,Avatar,Container,Button} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
export default function Footer() {
    return (
        <div className='footer'>
         <ContactSupportIcon style={{color:'white'}}/>
        <NavLink   className='nav_link'    exact
        activeClassName="navbar__link--active"  to='/Support'>לתמיכה טכנית</NavLink>
      
        </div>
    )
}
