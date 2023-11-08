import React from 'react';
import { useState } from 'react';
import data from './questoinData.json';

function Question(){ 

    const [question, setQuestion] = useState(data[0].question1);

    const questionStyle= { 
        color: "#00451E",
        textAlign: "center", 
        fontFamily: 'Gmarket Sans TTF',
        fontSize:" 1.875rem", 
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
        paddingTop: "4.69rem"

    }; 

    // 줄바꿈 문자를 <br />로 변환
    const renderQuestion = (text) => {
        const parts = text.split('\n');
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {part}
                <br />
            </React.Fragment>
        ));
    }

    return(
        <div style={questionStyle}>
            {renderQuestion(question)}
        </div>
    ); 
}

export default Question;