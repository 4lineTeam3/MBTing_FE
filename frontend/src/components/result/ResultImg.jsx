import React from 'react';

function ResultImg(img){ 
    const imageStyle = {
        width: '100%', 
        height: 'auto', 
        display: 'flex',
        justifyContent: 'center', 
        marginTop:'5%'
    };

    return(
        <div style={imageStyle}>
           <img src={img.image}/>
        </div>
    ); 
}

export default ResultImg; 