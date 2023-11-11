import React, { useState, useEffect } from 'react';
import data from './questoinData.json';

function QuestionNumber({currentIndex}) { 
    
    const [num, setNum] = useState(data[currentIndex].id);

    useEffect(() => {
        setNum(data[currentIndex].id);
    }, [currentIndex]);

    const titleStyle= { 
        color: "#000",
        textAlign: "center", 
        fontFamily: 'GmarketSansMedium',
        fontSize:" 1.25rem", 
        fontStyle: "normal",
        fontWeight: "100",
        lineHeight: "normal",
        paddingTop: "3.75rem"
    }; 

    return(
        <div style={titleStyle}>
            {num}/12
        </div>
    ); 
}

export default QuestionNumber;
