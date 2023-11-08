import React from 'react';

function ResultName(nameProps){ 
    const { name } = nameProps; 
    const nameStyle = {
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.5rem', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        lineHeight: 'normal', 
        marginTop:"5%"
    };

    return(
        <div style={nameStyle}>
          {name}
        </div>
    ); 
}

export default ResultName; 
