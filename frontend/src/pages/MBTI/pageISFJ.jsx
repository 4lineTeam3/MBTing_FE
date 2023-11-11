import React from 'react';
import resultBack from '../../img/resultBack.png'; 
import ResultTitle from '../../components/result/ResultTitle';
import ResultImg from '../../components/result/ResultImg'; 
import ISFJ from "../../img/MBTI/ISFJ.png"; 
import ResultName from "../../components/result/ResultName"; 
import ResultExplain from "../../components/result/ResultExplain"; 
import ResultDetail from "../../components/result/ResultDetail";
import Profilebtn from "../../components/result/Profilebtn"; 
import FriendResult from "../../components/result/FriendResult";
import SmallESTP from '../../img/MBTI/ESTPsmall.png'; 
import SmallESFP from '../../img/MBTI/ESFPsmall.png'; 
import { Link } from 'react-router-dom';
function PageISFJ(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '120vh'
    };

    return(
        <div style={backgroundStyle}>
            <ResultTitle/>
            <ResultImg image={ISFJ}/> 
            <ResultName name={"원장 선생님"}/>
            <ResultExplain 
                explain="게으른 완벽주의자, 당신은 "
                name="원장 선생님"
                feel = "!"
            />
            <ResultDetail
                detail1="성실하고 온화하며 협조를 잘해요."
                detail2="사람과 가까워지는 데 오래 걸려 낯선 팀원을 만나면 초반에 힘들어하는 편이에요."
                detail3="생각이 흘러넘치는 편!"
            />
            <FriendResult language={"C언어"} developerImg1={SmallESTP} developerImg2={SmallESFP}/>
            {/* <Link to="/SetProfile"><Profilebtn/></Link> */}
        </div>
    ); 
}

export default PageISFJ; 