import React from 'react';
import Input from "../../components/join/input"; 

function JoinEmailInput(){ 
    const emailText = { 
        color: '#000',
        fontFamily:'GmarketSansMedium',
        fontSize:'0.875rem', 
        margin:'0', 
        display:'flex', 
        marginLeft:'6.5%', 
        marginTop:'5%', 
        fontWeight:'300'
    }

    return(
        <div>
            <p style={emailText}>이메일</p>
            <Input text='예:mbting@gmail.com'/>
        </div>
    ); 
}

export default JoinEmailInput; 