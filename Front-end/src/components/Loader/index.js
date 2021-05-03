import React from 'react';

 // ==== CSS ==== //

import logo from '../../assets/images/logo.png'
import './loader.scss'

const Footer = () => (
    
    <div className="lds-circle"><img src={logo} alt="loader" /></div>
);

export default Footer;