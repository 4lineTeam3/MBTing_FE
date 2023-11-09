import React from 'react';

function EmailInput(){ 
    const emailInputStyle = {
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
        marginTop:'1.5%', 
        flexDirection: 'column', 
        marginLeft:'6.5%'
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
    const inputStyle = {
        width: '100%', 
        height: '100%',
        boxSizing: 'border-box', 
        border: '1px solid #00451E', 
        borderRadius: '0.3125rem', 
    }
    const emailText = { 
        color: '#000',
        fontFamily:'GmarketSansMedium',
        fontSize:'0.875rem', 
        margin:'0', 
        display:'flex', 
        marginLeft:'6.5%', 
        marginTop:'5%', 
        fontWeight:'300'
    }

    return(
        <div>
            <p style={emailText}>이메일</p>
            <div style={emailInputStyle}>
                <input style={inputStyle} placeholder="이메일 입력"/>
            </div>
            <button style={btnStyle}>비밀번호 재설정</button>
        </div>
    ); 
}

export default EmailInput; 