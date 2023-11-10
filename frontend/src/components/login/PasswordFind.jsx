import React from 'react';

function PasswordFind(){ 
    const findStyle = {
        fontFamily: 'GmarketSansMedium', 
        color:' #000', 
        textAlign: 'center', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        lineHeight: 'normal', 
        display:'flex', 
        justifyContent:'center', 
        marginTop:'5%'
    }

    return(
        <div style={findStyle}>
            <p>비밀번호를 잊어버리셨나요?</p>
            <p style={{ marginLeft: '1%', color: '#42A76E' }}>비밀번호 재설정</p>
        </div>
    ); 
}

export default PasswordFind; 
