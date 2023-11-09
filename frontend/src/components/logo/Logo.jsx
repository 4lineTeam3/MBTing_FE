import React from 'react';
import LogoBack from '../../img/Logo/logoBack.png'; 

function Logo(){ 
    const logoBack = { 
        backgroundImage: `url(${LogoBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '7vh'
    }

    return(
        <div style={logoBack}>
            
        </div>
    ); 
}

export default Logo; 

