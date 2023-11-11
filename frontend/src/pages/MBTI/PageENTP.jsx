import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ENTP from "../../img/MBTI/ENTP.png"; 
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
        height: '150vh'
    };

    return(
        <div style={backgroundStyle}>
            <ResultTitle/>
            <ResultImg image={ENTP}/> 
            <ResultName name={"짱구"}/>
            <ResultExplain 
                explain="즉흥적이고 기발한 아이디어의 당신은 "
                name="짱구"
                feel = "!"
            />
            <ResultDetail
                detail1="직설적이고 솔직한 피드백을 해요."
                detail2="상상력이 풍부해서 개발에 큰 도움을 줘요."
                detail3="주관이 뚜렷해 팀원들을 잘 이끌어요."
            />
            <FriendResult language={"swift"} developerImg1={SmallINFJ} developerImg2={SmallINTJ}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageENTP; 