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

    const renderQuestion = () => {
        const parts = question.split('\n');
        return(parts);
    }

    return(
        <div style={questionStyle}>
            {renderQuestion()}
        </div>
    ); 
}

export default Question;