import React from 'react';
import LogoBack from '../../img/Logo/logoBack.png'; 
import icon from '../../img/PersonIcon.png'
import { Link } from 'react-router-dom';

function Logo(){ 
    const logoBack = { 
        backgroundImage: `url(${LogoBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '7vh', 
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        height: "4rem",
        flexShrink: "0",
        background: "linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)",
        marginBottom:"4.25rem"
    }
    const logoStyle = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "GmarketSansMedium",
        fontSize: "1.5625rem",
        fontStyle: "normal",
        fontWeight: "bolder",
        lineHeight: "normal"
    };
    const heartStyle = {
        color: "#EA5E5D",
        fontFamily: "GmarketSansMedium",
        fontSize: "1.5625rem",
        fontstyle: "normal",
        fontWeight: "300",
        lineHeight: "normal"
    };

    return(
        <div style={logoBack}>
            <div style={logoStyle}>
                MBTING-<span style={heartStyle}>❥</span>
            </div>
        </div>
    ); 
}

export default Logo; 
