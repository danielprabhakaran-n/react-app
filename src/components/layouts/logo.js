import React from 'react';
import '../../App.css';

const logosrc= '../../assets/aurae.png';
const logoalt = "Logo";
const logo = () => {
    return <img className="logoImg" src={logosrc} alt={logoalt} />
}

export default logo;