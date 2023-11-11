import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ENTJ from "../../img/MBTI/ENTJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallINTP from '../../img/MBTI/INTPsmall.png'; 
import SmallINFP from '../../img/MBTI/INFPsmall.png'; 
import { Link } from 'react-router-dom';
import ShareBtn from '../../components/ShareBtn';
function PageENTJ(){ 
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
            <ResultImg image={ENTJ}/> 
            <ResultName name={"나미리 선생님"}/>
            <ResultExplain 
                explain="차가운 리더의 기질을 갖춘 당신은 워커홀릭 "
                name="나미리 선생님"
                feel = "!"
            />
            <ResultDetail
                detail1="통솔력과 충성심이 강해요."
                detail2="개발이 재밌어 항상 배우고 싶은 게 흘러넘쳐요."
                detail3="체계적인 성격으로 꼼꼼한 계획을 세워요."
            />
            <FriendResult language={"java, C언어, python"} developerImg1={SmallINTP} developerImg2={SmallINFP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
            <ShareBtn/>
        </div>
    ); 
}

export default PageENTJ; 