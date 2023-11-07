import React from 'react';
import resultBack from '../img/resultBack.png'; 
import ResultTitle from '../components/ResultTitle';
import ResultImg from '../components/ResultImg'; 

function Result(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 100)'
    };

    return(
        <div style={backgroundStyle}>
            <ResultTitle/>
            <ResultImg/>
        </div>
    ); 
}

export default Result; 