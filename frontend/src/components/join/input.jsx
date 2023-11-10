import React from 'react';

function input(props){ 
    const {text} = props; 
    const JoinInputStyle = {
        fontFamily: 'GmarketSansMedium', 
        width: '23.125rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.3125rem', 
        border: '1px solid #CECECE', 
        background: '#FFF', 
        display:'flex', 
        justifyContent:'center', 
        margin: '0 auto', 
        marginTop:'2%', 
        flexDirection: 'column', 
        marginLeft:'5%'
    };
    const inputStyle = { 
        '::placeholder': {
            color: '#CECECE',
            fontFamily: 'GmarketSansMedium'
        },
        width: '100%', 
        height: '100%',
        boxSizing: 'border-box', 
        border: '1px solid #CECECE', 
        borderRadius: '0.3125rem'
    }

    return(
        <div style={JoinInputStyle}>
           <input style={inputStyle} placeholder={text}/>
        </div>
    ); 
}

export default input;
