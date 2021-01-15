import React from 'react';
// import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
const logoNew = require('../../assets/images/burger-logo.png');
const logo =(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={logoNew} alt="MyBurger" />
    </div>
)

export default logo;