import React, { useState } from 'react';
import background from '../../img/questionBack.png'
import SetProfileHeader from './setProfileHeader';
import ProfileText from './profileText';
import ModifyPic from './modifypic'
import PutUserName from './putUserName';
import PutUserAge from './putUserAge';
import DevPart from './devPart';
import HopePart from './hopePart';
import Add from './add';
import OpenChat from './openChat';
import { Link } from 'react-router-dom';
import axios from 'axios';

function setProfileMain(){

    const handleButtonClick = () => {
        // 사용자가 입력한 닉네임 가져오기
        
        const nickname = document.getElementById('nickname').value;
        //이미지
        //개발파트, 개발영역
        const spec =document.getElementById('spec').value;//스펙
        const link = document.getElementById('chatting').value; //오픈채팅 링크
        

        // PATCH 요청 보내기
        axios.patch('/update_profile/<int:pk>', {
        "nickname": nickname,
        "age": null,
        "profile_picture": null,
        "frontEnd": null,
        "backEnd": null,
        "uiux": null,
        "mobile": null,
        "web": null,
        "android": null,
        "ios": null,
        "mbti": null,
        "spec1": null,
        "spec2": null,
        "spec3": null,
        "spec4": null,

        })
        .then(response => {
            console.log('서버 응답:', response.data);
        })
        .catch(error => {
            console.error('에러 발생:', error);
        });
    };

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: 'AUTO'
    };

    const btnStyle={
        width: "24.2rem",
        height: "2.8125rem",
        flexShrink: "0",
        marginTop:"1.82rem",
        marginLeft:"5%",
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Gmarket Sans TTF",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        borderRadius: "0.3125rem",
        borderColor:"#43AA70",
        background: "linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)",
        boxShadow: "none" /* 그림자 비활성화 */,
        marginBottom:"5rem"
    }


    return(
        <div style={backgroundStyle}>
            <SetProfileHeader/>
            <ProfileText/>
            <ModifyPic/>
            <PutUserName/>
            <PutUserAge/>
            <DevPart/>
            <HopePart/>
            <Add/>
            <OpenChat/>
            <Link to='/Matching'><button style={btnStyle} onClick={handleButtonClick}>프로필 보러 가기</button></Link>
        </div>
    ); 
}

export default setProfileMain;