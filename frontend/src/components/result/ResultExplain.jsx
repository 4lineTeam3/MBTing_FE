import React from 'react';

function ResultExplain(props) { 
    const { explain, name, feel } = props;

    const explainStyle = {
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.25rem', 
        fontStyle: 'normal', 
        fontWeight: '300', 
        lineHeight: '1.875rem', 
        marginTop: "5%"
    };
    const nameStyle = { 
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.25rem', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        lineHeight: '1.875rem', 
        marginTop: "5%"
    }

    return (
        <div style={explainStyle}>
            <div>{explain}<span style={nameStyle}>{name}</span>{feel}</div>
        </div>
    ); 
}

export default ResultExplain;
