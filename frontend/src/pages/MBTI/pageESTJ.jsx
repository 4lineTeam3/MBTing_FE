import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ESTJ from "../../img/MBTI/ESTJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallISFP from '../../img/MBTI/ISFPsmall.png'; 
import SmallISTP from '../../img/MBTI/ISTPsmall.png'; 
import { Link } from 'react-router-dom';
function PageESTJ(){ 
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
            <ResultImg image={ESTJ}/> 
            <ResultName name={"철수"}/>
            <ResultExplain 
                explain="계획은 미리미리! 섬세한 당신은 "
                name="철수"
                feel = "!"
            />
            <ResultDetail
                detail1="냉정한 편이며 자존심도 강해요."
                detail2="게으르거나 일을 못하는 사람은 이해할 수 없어요."
                detail3="계획이 흐트러지는 것도 정말 싫어해요."
            />
            <FriendResult language={"java, C언어"} developerImg1={SmallISFP} developerImg2={SmallISTP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageESTJ; 