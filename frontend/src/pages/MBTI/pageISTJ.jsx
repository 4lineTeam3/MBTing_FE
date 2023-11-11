import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ISTJ from "../../img/MBTI/ISTJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallESFP from '../../img/MBTI/ESFPsmall.png'; 
import SmallESTP from '../../img/MBTI/ESTPsmall.png'; 
import { Link } from 'react-router-dom';
import ShareBtn from '../../components/ShareBtn';
function PageISTJ(){ 
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
            <ResultImg image={ISTJ}/> 
            <ResultName name={"채성아 선생님"}/>
            <ResultExplain 
                explain="원리원칙주의자, 당신은 "
                name="채성아 선생님"
                feel = "!"
            />
            <ResultDetail
                detail1="보수적, 보편적이라는 말이 어울려요."
                detail2="책임감이 강하고 일 처리가 깔끔해요."
                detail3="속마음을 잘 드러내지 않아요."
            />
            <FriendResult language={"javascript"} developerImg1={SmallESFP} developerImg2={SmallESTP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
            <ShareBtn/>
        </div>
    ); 
}

export default PageISTJ; 