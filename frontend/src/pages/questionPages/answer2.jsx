import React from 'react';
import data from './questoinData.json'
import { useState } from 'react';

function Answer2(){ 

    const [ans2, setAns2] = useState(data[0].answers[1].content);

    const answerStyle = {
        borderRadius: "0.625rem",
        paddingTop: "1.25rem",
        paddingBottom:"1.25rem",
        marginTop:"1.56rem",
        marginLeft:"2.5rem",
        marginRight:"2.5rem",    
        background: "linear-gradient(144deg, #FFF 0%, rgba(242, 242, 242, 0.80) 100%)",
        boxShadow: "10px 10px 25px 0px #F5EEA7",
        textAlign: "center",
        color: "#000",
        textAlign: "center",
        fontFamily: 'Gmarket Sans TTF',
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    };

    const renderAnswer = () => {
        const parts = ans2.split('\n');
        return (parts
        //parts.map((part, index) => (
        //     <React.Fragment key={index}>
        //         {part}
        //         <br />
        //     </React.Fragment>
        );
    }


    return(
        <div style={answerStyle} >
            {renderAnswer()}
        </div>
    ); 
}

export default Answer2;