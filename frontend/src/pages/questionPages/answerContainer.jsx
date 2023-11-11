
import React from 'react';
import Answer1 from '../questionPages/answer1';
import Answer2 from  '../questionPages/answer2'

function AnswerContainer({ onNextQuestion,currentIndex }) {

    

    return (
        <div>
            <Answer1 onNextQuestion={onNextQuestion} currentIndex={currentIndex}/>
            <Answer2 onNextQuestion={onNextQuestion} currentIndex={currentIndex}/>
        </div>
    );
}

export default AnswerContainer;
