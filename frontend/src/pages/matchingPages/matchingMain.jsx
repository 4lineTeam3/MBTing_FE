import React, { useState } from 'react';
import questionBack from '../../img/questionBack.png'
import MatchingHeader from './matchinHeader';
import SumContainer from './sumContainer'

function MatchingMain(){
    const backgroundStyle = {
        backgroundImage: `url(${questionBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: 'auto'
    };


    return(
        <div style={backgroundStyle}>
            <MatchingHeader/>
            <SumContainer/>
            <SumContainer/>
        </div>
    ); 
}

export default MatchingMain;