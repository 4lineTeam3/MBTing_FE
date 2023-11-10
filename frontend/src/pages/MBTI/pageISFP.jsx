import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ISFP from "../../img/MBTI/ISFP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallESFJ from '../../img/MBTI/ESFJsmall.png'; 
import SmallENFJ from '../../img/MBTI/ENFJsmall.png'; 

function PageISFP(){ 
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
            <ResultImg image={ISFP}/> 
            <ResultName name={"훈이"}/>
            <ResultExplain 
                explain="혼자만의 시간이 소중한 당신은 "
                name="훈이"
                feel = "!"
            />
            <ResultDetail
                detail1="남 눈치를 많이 봐요."
                detail2="나서는 것을 선호하지 않아요."
                detail3="나에게 프로젝트 발표를 맡기지 마세요!"
             />
             <FriendResult language={"python"} developerImg1={SmallESFJ} developerImg2={SmallENFJ}/>
             <Profilebtn/>
        </div>
    ); 
}

export default PageISFP; 