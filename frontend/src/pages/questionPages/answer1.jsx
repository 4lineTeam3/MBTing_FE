import React from 'react';
import data from './questoinData.json'
import { useState } from 'react';

function Answer1(){ 

    const [ans1, setAns1] = useState(data[0].answers[0].content);

    const answerStyle = {
        borderRadius: "0.625rem",
        paddingTop: "1.25rem",
        paddingBottom:"1.25rem",
        marginTop:"11.12rem",
        marginLeft:"2.5rem",
        marginRight:"2.5rem",
        background: "linear-gradient(144deg, #FFF 0%, rgba(242, 242, 242, 0.80) 100%)",
        boxShadow: "10px 10px 25px 0px #F5EEA7",
        textAlign: "center",
        color: "#000",
        textAlign: "center",
        fontFamily: 'GmarketSansMedium',
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    };

    const renderAnswer = () => {
        const parts = ans1.split('\n');
        return(parts);
    }

    return(
        <div style={answerStyle} >
            {renderAnswer()}
        </div>
    ); 
}

export default Answer1; 