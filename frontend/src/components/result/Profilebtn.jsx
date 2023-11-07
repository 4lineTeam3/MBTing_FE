import React from 'react';

function Profilebtn(){ 
    const btnContainerStyle = {
        textAlign: 'center'
    };

    const btnStyle = {
        border:'none', 
        width: '21.875rem',
        height: '3.375rem',
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background: 'linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)', 
        color: '#FFF', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.375rem', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        lineHeight: 'normal', 
        display: 'inline-block', 
        marginTop:"4%"
    };

    return(
        <div style={btnContainerStyle}>
            <button style={btnStyle}>
                프로필 보러가기
            </button>
        </div>
    ); 
}

export default Profilebtn; 
