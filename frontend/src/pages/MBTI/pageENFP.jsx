import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ENFP from "../../img/MBTI/ENFP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallINFJ from '../../img/MBTI/INFJsmall.png'; 
import SmallINTJ from '../../img/MBTI/INTJsmall.png'; 
import { Link } from 'react-router-dom';

function PageENTP(){ 
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
            <ResultImg image={ENFP}/> 
            <ResultName name={"짱아"}/>
            <ResultExplain 
                explain="새로운 사람을 만나는 것이 좋은 당신은 "
                name="짱아"
                feel = "!"
            />
            <ResultDetail
                detail1="주변으로 사람이 모이는 매력의 소유자"
                detail2="이 구역의 얼리어답터, 개발에 딱이에요!"
                detail3="트렌드에 민감해 아이디어가 샘솟아요."
            />
            <FriendResult language={"python"} developerImg1={SmallINTJ} developerImg2={SmallINFJ}/>
            <Link to="/SetProfile"><Profilebtn/></Link>
        </div>
    ); 
}

export default PageENTP; 