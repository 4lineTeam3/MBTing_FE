import React from 'react';
import Logo from '../../components/logo/Logo';
import LoginText from '../../components/login/LoginText'; 
import LoginInput from '../../components/login/LoginInput'; 
import PasswordFind from '../../components/login/PasswordFind'; 
import originBack from '../../img/originBack.png'; 

function PageLogin(){ 
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
            <LoginText text1="안녕하세요!" text2="가입한 이메일로 로그인해 주세요."/>
            <LoginInput/>
            <PasswordFind/>
        </div>
    ); 
}

export default PageLogin; 


