import React, { useState } from 'react';
import questionBack from '../../img/questionBack.png'
import MatchingHeader from './matchinHeader';
import SumContainer from './sumContainer';
import SumContainer2 from './sumContainer2';

function MatchingMain(){
    const backgroundStyle = {
        backgroundImage: `url(${questionBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh'
    };


    return(
        <div style={backgroundStyle}>
            <MatchingHeader/>
            <SumContainer/>
            <SumContainer2/>
        </div>
    ); 
}

export default MatchingMain;