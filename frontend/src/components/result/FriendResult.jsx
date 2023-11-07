import React from 'react';
import PersonalLangauage from '../result/PersonalLanguage';
import PersonalDeveloper from '../result/PersonalDeveloper'; 

function FriendResult(props){ 
    const { language, developerImg1, developerImg2 } = props;
    const friendBack = { 
        width: '21.875rem', 
        height: '8.1875rem', 
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background: 'linear-gradient(144deg, #FFF 0%, rgba(242, 242, 242, 0.80) 100%)', 
        boxShadow: '10px 10px 25px 0px #F5EEA7', 
        textAlign:"center",
        margin: '0 auto', 
        marginTop:"3%", 
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const line = { 
        width:' 0.0625rem', 
        height: '5.625rem', 
        background: '#000', 
        marginLeft:"2%", 
        marginRight:"2%"
    }

    return(
        <div style={friendBack}>
            <PersonalLangauage language={language}/>
            <div style={line}/>
            <PersonalDeveloper img1={developerImg1} img2={developerImg2}/>
        </div>
    ); 
}

export default FriendResult; 
