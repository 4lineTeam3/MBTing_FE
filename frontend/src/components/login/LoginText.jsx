import React from 'react';

function LoginText({text1,text2}){  
    const loginTextStyle = { 
        color: '#000', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.4375rem', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        lineHeight: 'normal', 
        marginTop:"15%", 
        display:'flex', 
        marginLeft:'6.5%'
    }

    return(
        <div style={loginTextStyle}>
            {text1}<br/>
            {text2}
        </div>
    ); 
}

export default LoginText; 
