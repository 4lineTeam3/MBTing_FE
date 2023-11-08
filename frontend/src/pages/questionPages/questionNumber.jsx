import React, { useState } from 'react';
import data from './questoinData.json';

function QuestionNumber() { 
    
    const [num, setNum] = useState(data[0].id);

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
