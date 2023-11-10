import React from 'react';
import data from './questoinData.json'
import { useState , useEffect} from 'react';

function Answer2({ onNextQuestion, currentIndex }) {
const [ans2, setAns2] = useState('');

useEffect(() => {
    setAns2(data[currentIndex].answers[1].content);
}, [currentIndex]);

const handleClick = () => {
    onNextQuestion(data[currentIndex].option, data[currentIndex].answers[1].type);
};

const answerStyle = {
    borderRadius: '0.625rem',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    marginTop: '1.56rem',
    marginLeft: '2.5rem',
    marginRight: '2.5rem',
    background: 'linear-gradient(144deg, #FFF 0%, rgba(242, 242, 242, 0.80) 100%)',
    boxShadow: '10px 10px 25px 0px #F5EEA7',
    textAlign: 'center',
    color: '#000',
    fontFamily: 'GmarketSansMedium',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
};

const renderAnswer = () => {
    const parts = ans2.split('\n');
    return parts.map((part, index) => <div key={index}>{part}</div>);
};

return (
    <div style={answerStyle} onClick={handleClick}>
    {renderAnswer()}
    </div>
);
}

export default Answer2;
