import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import INFJ from "../../img/MBTI/INFJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallENFP from '../../img/MBTI/ENFPsmall.png'; 
import SmallENTP from '../../img/MBTI/ENTPsmall.png'; 
import { Link } from 'react-router-dom';
function PageINFJ(){ 
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
            <ResultImg image={INFJ}/> 
            <ResultName name={"차은주 선생님"}/>
            <ResultExplain 
                explain="나무보단 숲을 보는 당신은 "
                name="차은주 선생님"
                feel = "!"
            />
            <ResultDetail
                detail1="통찰력이 아주 깊어요!"
                detail2="사회생활이 피곤해 가끔 팀 개발이 부담돼요."
                detail3="주변에서 엉뚱하다는 말을 듣곤 해요."
            />
            <FriendResult language={"python, java"} developerImg1={SmallENFP} developerImg2={SmallENTP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageINFJ; 