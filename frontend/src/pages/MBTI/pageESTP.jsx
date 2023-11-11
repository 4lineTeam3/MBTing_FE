import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ESTP from "../../img/MBTI/ESTP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallISFJ from '../../img/MBTI/ISFJsmall.png'; 
import SmallISTJ from '../../img/MBTI/ISTJsmall.png'; 
import { Link } from 'react-router-dom';
function PageESTP(){ 
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
            <ResultImg image={ESTP}/> 
            <ResultName name={"수지"}/>
            <ResultExplain 
                explain="답답한 스타일을 싫어하는 당신은 직진 본능 "
                name="수지"
                feel = "!"
            />
            <ResultDetail
                detail1="자신감과 자존감은 넘치나 인내심이 부족해요."
                detail2="실행력이 좋아 일처리가 빨라요."
                detail3="관찰력이 좋아 상황에 대한 분석에 능해요"
            />
            <FriendResult language={"java, C언어"} developerImg1={SmallISFJ} developerImg2={SmallISTJ}/>
            <Link to="/SetProfile"><Profilebtn/></Link>
        </div>
    ); 
}

export default PageESTP; 