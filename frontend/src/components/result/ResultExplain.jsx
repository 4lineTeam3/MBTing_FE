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
        marginTop: "3%"
    };
    const nameStyle = { 
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.25rem', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        lineHeight: '1.875rem', 
        marginTop: "3%"
    }
    const subStyle = { 
        marginLeft:'3%', 
        marginRight:'3%'
    }

    return (
        <div style={explainStyle}>
            <div style={subStyle}>{explain}<span style={nameStyle}>{name}</span>{feel}</div>
        </div>
    ); 
}

export default ResultExplain;
