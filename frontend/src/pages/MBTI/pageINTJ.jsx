import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import INTJ from "../../img/MBTI/INTJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallENFP from '../../img/MBTI/ENFPsmall.png'; 
import SmallENTP from '../../img/MBTI/ENTPsmall.png'; 
import { Link } from 'react-router-dom';
function PageINTJ(){ 
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
            <ResultImg image={INTJ}/> 
            <ResultName name={"오수"}/>
            <ResultExplain 
                explain="모 아니면 도, 당신은 "
                name="오수"
                feel = "!"
            />
            <ResultDetail
                detail1="목적 달성을 위해서라면 불도저가 돼요."
                detail2="어떤 사람인지 모르겠다는 평가를 받곤 해요."
                detail3="뭐든 갑작스러운 게 싫은 당신에게 ‘일단 해보자’라는 말은 금지!"
            />
            <FriendResult language={"python"} developerImg1={SmallENFP} developerImg2={SmallENTP}/>
            <Profilebtn/>
        </div>
    ); 
}

export default PageINTJ; 