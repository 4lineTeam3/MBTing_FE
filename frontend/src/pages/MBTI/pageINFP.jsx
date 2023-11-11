import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import INFP from "../../img/MBTI/INFP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallENFJ from '../../img/MBTI/ENFJsmall.png'; 
import SmallENTJ from '../../img/MBTI/ENTJsmall.png'; 
import { Link } from 'react-router-dom';
function PageINFP(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '150vh'
    };

    return(
        <div style={backgroundStyle}>
            <ResultTitle/>
            <ResultImg image={INFP}/> 
            <ResultName name={"흰둥이"}/>
            <ResultExplain 
                explain="긍정적인 쿠크다스, 당신은 "
                name="흰둥이"
                feel = "!"
            />
            <ResultDetail
                detail1="자신의 가치관에만 부합하면 보상이 없어도 실천하는 유형이에요."
                detail2="규칙? 말만 들어도 숨이 막혀요!"
                detail3="타인의 감정을 잘 캐치해요."
            />
            <FriendResult language={"C언어, C++"} developerImg1={SmallENFJ} developerImg2={SmallENTJ}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageINFP; 