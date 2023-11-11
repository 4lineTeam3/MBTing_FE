import React from 'react';
import { useState, useEffect } from 'react';
import data from './questoinData.json';

function Question({ currentIndex }) {
const [question, setQuestion] = useState('');

useEffect(() => {
    setQuestion(data[currentIndex].question1);
}, [currentIndex]);

const questionStyle = {
    color: '#00451E',
    textAlign: 'center',
    fontFamily: 'GmarketSansMedium',
    fontSize: '1.575rem',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
    paddingTop: '4.69rem',
};

const renderQuestion = () => {
    const parts = question.split('\n');
    return parts.map((part, index) => <div key={index}>{part}</div>);
};

return <div style={questionStyle}>{renderQuestion()}</div>;
}

export default Question;
