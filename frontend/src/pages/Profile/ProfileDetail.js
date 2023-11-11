import React from 'react';
import Logo from '../../components/logo/Logo';
import originBack from '../../img/originBack.png'; 
import ProfileImg from "../../components/profile/ProfileImg"; 
import ProfileInfo from "../../components/profile/ProfileInfo"; 
import ProfileExplan from "../../components/profile/ProfileExplan"; 
import ProfileMbti from "../../components/profile/ProfileMbti"; 
import ProfileMyPr from "../../components/profile/ProfileMyPr"; 
import ProfileBtn from "../../components/profile/ProfileBtn"; 

function ProfileDetail(){ 
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
            <ProfileImg/>
            <ProfileInfo name = "핑핑이" age = "23세" tech = "Front-End"/>
            <ProfileExplan detail="새로운 사람을 만나는 것이 좋은" name="짱아"/>
            <ProfileMbti 
                detail1="주변으로 사람이 모이는 매력의 소유자"
                detail2="이 구역의 얼리어답터, 개발에 딱이에요!"
                detail3="트렌드에 민감해 아이디어가 샘솟아요."/>
            <ProfileMyPr
                pr1="모바일 웹에 관심있어요."
                pr2="멋쟁이 사자처럼 11기 한성대 활동 경험이 있어요."
                pr3="멋쟁이 사자처럼 11기 ‘올해의 아기사자’ 선정 경험이 있어요." 
            />
            <ProfileBtn/>
        </div>
    ); 
}

export default ProfileDetail; 


