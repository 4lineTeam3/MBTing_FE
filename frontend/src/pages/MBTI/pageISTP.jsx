import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ISTP from "../../img/MBTI/ISTP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallESFJ from '../../img/MBTI/ESFJsmall.png'; 
import SmallESTJ from '../../img/MBTI/ESTJsmall.png'; 
import { Link } from 'react-router-dom';
function PageISTP(){ 
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
            <ResultImg image={ISTP}/> 
            <ResultName name={"옆집 아주머니"}/>
            <ResultExplain 
                explain="보기 드문 당신은 "
                name="옆집 아주머니"
                feel = "!"
            />
            <ResultDetail
                detail1="갑작스러운 상황에 대처하는 능력이 좋아요."
                detail2="조용하지만 호기심과 관찰력이 좋은 편!"
                detail3="일 센스가 좋은 만능 재주꾼이에요."
            />
            <FriendResult language={"C언어, C++"} developerImg1={SmallESFJ} developerImg2={SmallESTJ}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageISTP; 