import React from 'react';

function ResultTitle(){ 
    const titleStyle= { 
        color: "#000",
        textAlign: "center", 
        fontFamily: 'GmarketSansMedium',
        fontSize:" 2.1875rem", 
        fontStyle: "normal", 
        fontWeight: "700", 
        lineHeight: "normal", 
        paddingTop:"30%", 
        marginLeft:"13%", 
        marginRight:"13%"
    }; 

    return(
        <div style={titleStyle}>
            짱구로 알아보는 나의 개발 유형은?
        </div>
    ); 
}

export default ResultTitle; 