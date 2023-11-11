import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import INTP from "../../img/MBTI/INTP.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallESTJ from '../../img/MBTI/ESTJsmall.png'; 
import SmallENTJ from '../../img/MBTI/ENTJsmall.png'; 
import { Link } from 'react-router-dom';
function PageINTP(){ 
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
            <ResultImg image={INTP}/> 
            <ResultName name={"맹구"}/>
            <ResultExplain 
                explain="기발하고 엉뚱한 아이디어 뱅크, "
                name="맹구"
                feel = "!"
            />
            <ResultDetail
                detail1="비효율적인 일을 싫어해요."
                detail2="반복적인 일상을 선호하지 않아요."
                detail3="토론의 정답을 찾을 때 정말 뿌듯해요."
            />
            <FriendResult language={"python, java"} developerImg1={SmallESTJ} developerImg2={SmallENTJ}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageINTP; 