import React from 'react';
import Logo from '../../components/logo/Logo';
import originBack from '../../img/originBack.png'; 
import LoginText from '../../components/login/LoginText'; 
import JoinEmailInput from '../../components/join/JoinEmailInput';
import JoinPwInput from "../../components/join/JoinPwInput"; 
import NickName from "../../components/join/NickNameInput"; 
import JoinTel from "../../components/join/JoinTel"; 

function PageJoin(){ 
    const joinStyle = {
        backgroundImage: `url(${originBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh'
    };

    return(
        <div style={joinStyle}>
            <Logo/>
            <LoginText text1="안녕하세요!" text2="이메일로 회원가입해 주세요."/>
            <JoinEmailInput/>
            <JoinPwInput/>
            <NickName/>
            <JoinTel/>
        </div>
    ); 
}

export default PageJoin; 