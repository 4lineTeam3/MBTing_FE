import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ESFP from "../../img/MBTI/ESFP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallISTJ from '../../img/MBTI/ISTJsmall.png'; 
import SmallISFJ from '../../img/MBTI/ISFJsmall.png'; 

function PageESFP(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh'
    };

    return(
        <div style={backgroundStyle}>
            <ResultTitle/>
            <ResultImg image={ESFP}/> 
            <ResultName name={"봉미선"}/>
            <ResultExplain 
                explain="사교성 분야 갑, 당신은 "
                name="봉미선"
                feel = "!"
            />
            <ResultDetail
                detail1="개발이 어려워 걱정하다가도 조금 있으면 밝아져요."
                detail2="거절을 잘 못해서 가끔 팀플이 힘들어요."
                detail3="친화력이 매우 높아 팀원들과 금방 친해져요."
             />
             <FriendResult language={"C++, C#"} developerImg1={SmallISFJ} developerImg2={SmallISTJ}/>
             <Profilebtn/>
        </div>
    ); 
}

export default PageESFP; 