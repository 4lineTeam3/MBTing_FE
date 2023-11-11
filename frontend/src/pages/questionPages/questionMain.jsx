import React, { useState } from 'react';
import questionBack from '../../img/questionBack.png';
import QuestionNumber from '../questionPages/questionNumber';
import Question from '../questionPages/question';
import AnswerContainer from '../questionPages/answerContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function QuestionMain() {
    const navigate = useNavigate();
const backgroundStyle = {
    backgroundImage: `url(${questionBack})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100vw',
    objectFit: 'cover',
    height: '100vh',
};

const [index, setIndex] = useState(0);
const [mbtiResults, setMbtiResults] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
});

const [finalResult, setFinalResult] = useState('');

const handleNextQuestion = (option, type) => {
    setMbtiResults((prevResults) => ({
    ...prevResults,
    [type]: prevResults[type] + 1,
    }));

    if (index < 11) {
    setIndex((prevIndex) => prevIndex + 1);
    } else {
    let resultString = '';
    if (mbtiResults.E > mbtiResults.I) resultString += 'E';
    else resultString += 'I';

    if (mbtiResults.N > mbtiResults.S) resultString += 'N';
    else resultString += 'S';

    if (mbtiResults.T > mbtiResults.F) resultString += 'T';
    else resultString += 'F';

    if (mbtiResults.J > mbtiResults.P) resultString += 'J';
    else resultString += 'P';

    setFinalResult(resultString);


    console.log('Final Result:', resultString);
    switch(resultString){
        case 'ENFJ':
            navigate('/enfj');
            break;
        case 'ENFP':
            navigate('/enfp');
            break;
        case 'ENTJ':
            navigate('/entj');
            break;
        case 'ENTP' :
            navigate('/entp');
            break;
        case 'ESFJ':
            navigate('/esfj');
            break;
        case 'ESFP' :
            navigate('/esfp');
            break;
        case 'ESTJ' :
            navigate('/estj');
            break;

        case 'ESTP' :
            navigate('/estp');
            break;

        case 'INFJ' :
            navigate('/infj');
            break;

        case 'INFP':
            navigate('/infp');
            break;

        case 'INTJ':
            navigate('/intj');
            break;

        case 'INTP' :
            navigate('/intp');
            break;

        case 'ISFJ' :
            navigate('/isfj');
            break;

        case 'ISFP' :
            navigate('/isfp');
            break;

        case 'ISTJ':
            navigate('/istj');
            break;

        case 'ISTP':
            navigate('/istp');
            break;
    }
    
    // axios.post('https://',{
    //     resultString:resultString,
    // })
    // .then ((response) => {
        
    // })
    // .catch((error) => {
    //     console.error('error')
    // })

    }
};

return (
    <div style={backgroundStyle}>
    <QuestionNumber currentIndex={index} />
    <Question currentIndex={index} />
    <AnswerContainer currentIndex={index} onNextQuestion={handleNextQuestion} />
    </div>
);
}

export default QuestionMain;
