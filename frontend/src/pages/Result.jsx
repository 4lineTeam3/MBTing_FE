import React from 'react';
import resultBack from '../img/resultBack.png'; 

import La from '../components/la';

function Result(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 100)'
    };

    return(
        <div style={backgroundStyle}>
            <La/>
        </div>
    ); 
}

export default Result; 