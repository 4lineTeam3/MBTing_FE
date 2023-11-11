import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ESFJ from "../../img/MBTI/ESFJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallISTP from '../../img/MBTI/ISTPsmall.png'; 
import SmallINTP from '../../img/MBTI/INTPsmall.png'; 
import { Link } from 'react-router-dom';
function PageESFJ(){ 
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
            <ResultImg image={ESFJ}/> 
            <ResultName name={"신형만"}/>
            <ResultExplain 
                explain="팀플의 한 줄기 빛, 당신은 "
                name="신형만"
                feel = "!"
            />
            <ResultDetail
                detail1="타인의 감정을 중요시하고 배려도 많이 해요."
                detail2="자려고 누우면 실수한 건 없는지 자꾸 생각해요."
                detail3="중재자 역할을 잘해 집단관계에 큰 도움이 돼요."
            />
            <FriendResult language={"java, katlin"} developerImg1={SmallISTP} developerImg2={SmallINTP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageESFJ; 