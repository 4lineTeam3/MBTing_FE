import React from 'react';
import Logo from '../../components/logo/Logo';
import LoginText from '../../components/login/LoginText'; 
import EmailInput from '../../components/login/EmailInput'; 
import originBack from '../../img/originBack.png'; 

function pwReset(){ 
    const backgroundStyle = {
        backgroundImage: `url(${originBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh', 
    };

    return(
        <div style={backgroundStyle}>
            <Logo/>
            <LoginText text1="회원가입 시 등록한" text2="이메일 주소를 입력해주세요."/>
            <EmailInput/>
        </div>
    ); 
}

export default pwReset; 

