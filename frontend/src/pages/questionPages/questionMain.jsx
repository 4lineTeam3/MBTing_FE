import React, { useState } from 'react';
import questionBack from '../../img/questionBack.png'
import QuestionNumber from '../questionPages/questionNumber';
import Question from '../questionPages/question';
import AnswerContainer from '../questionPages/answerContainer';

function QuestionMain(){
    const backgroundStyle = {
        backgroundImage: `url(${questionBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh'
    };

    const [index, setIndex] = useState(0);

    // const handleNextQuestion = () => {
    //     setIndex(prevIndex => prevIndex + 1);
    // }

    return(
        <div style={backgroundStyle}>
            <QuestionNumber/> 
            <Question />
            <AnswerContainer />
        </div>
    ); 
}

export default QuestionMain;