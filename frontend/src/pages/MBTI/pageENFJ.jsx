import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ENFJ from "../../img/MBTI/ENFJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallINFP from '../../img/MBTI/INFPsmall.png'; 
import SmallISFP from '../../img/MBTI/ISFPsmall.png';
import ShareBtn from '../../components/ShareBtn';
import { Link } from 'react-router-dom'; 

function PageENFJ(){ 
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
            <ResultImg image={ENFJ}/> 
            <ResultName name={"유리"}/>
            <ResultExplain 
                explain="공감능력 최상, 센스쟁이 당신은 "
                name="유리"
                feel = "!"
            />
            <ResultDetail
                detail1="화합을 좋아해서 팀 분위기를 띄워주는 역할을 해요."
                detail2="항상 행복을 추구하는 편이에요."
                detail3="전형적인 학생회장 유형으로 리더를 자주 맡아요."
            />
            <FriendResult language={"javascript"} developerImg1={SmallINFP} developerImg2={SmallISFP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
            <ShareBtn/>
        </div>
    ); 
}

export default PageENFJ; 