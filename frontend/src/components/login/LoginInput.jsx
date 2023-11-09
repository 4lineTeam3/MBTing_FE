import React from 'react';

function LoginInput(){ 
    const loginInputStyle = { 
        fontFamily: 'GmarketSansMedium', 
        width: '23.125rem', 
        height: '5.625rem', 
        flexShrink: '0', 
        borderRadius: '0.3125rem', 
        border: '1px solid #CECECE', 
        background: '#FFF', 
        display:'flex', 
        justifyContent:'center', 
        margin: '0 auto', 
        marginTop:'5%', 
        flexDirection: 'column', 
        marginLeft:'6.5%'
    }
    const inputStyle = {
        width: '100%', 
        height: '100%',
        boxSizing: 'border-box', 
        border: '1px solid #CECECE', 
        borderRadius: '0.3125rem', 
    }

    const btnStyle = { 
        width: '23.125rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.3125rem', 
        background: 'linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)', 
        color: '#FFF', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        lineHeight: 'normal', 
        border: 'none', 
        marginLeft:'6.5%', 
        marginTop:'8%'
    }
    
    return(
        <div>
            <div style={loginInputStyle}>
                <input style={inputStyle} placeholder="이메일 입력"/>
                <input style={inputStyle} placeholder="비밀번호 입력"/>
            </div>
            <button style={btnStyle}>로그인</button>
        </div>
    ); 
}

export default LoginInput; 
