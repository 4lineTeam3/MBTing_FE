import React from 'react';

function DeveloperImg(props){ 
    const { image } = props;
    const imgStyle = { 
        marginRight: '0.5rem' 
    }

    return(
        <div>
            <img src={image} style={imgStyle} />
        </div>
    ); 
}

export default DeveloperImg; 
