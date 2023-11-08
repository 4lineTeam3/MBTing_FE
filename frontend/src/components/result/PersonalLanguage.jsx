import React from 'react';

function PersonalLanguage(props){ 
    const { language } = props; 
    const plStyle = {
        marginLeft:"10%", 
        marginRight:"7%", 
        marginTop:"-6.5%"
    }
    const plText = { 
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: 'bolder', 
        lineHeight: 'normal'
    }
    const plLanguage = { 
        color: '#000',
        textAlign: 'center',
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: '100', 
        lineHeight: 'normal', 
        marginTop:"10%"
    }

    return(
        <div style={plStyle}>
            <div style={plText}>당신과 어울리는 기초 언어</div>
            <div style={plLanguage}>{language}</div>
        </div>
    ); 
}

export default PersonalLanguage; 
