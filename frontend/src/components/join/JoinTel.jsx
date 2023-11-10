import React from 'react';
import Input from "../../components/join/input"; 

function JoinTel(){ 
    const pwText = {
        color: '#000',
        fontFamily:'GmarketSansMedium',
        fontSize:'0.875rem', 
        margin:'0', 
        display:'flex', 
        marginLeft:'6.5%', 
        marginTop:'5%', 
        fontWeight:'300'
    };

    return(
        <div>
            <p style={pwText}>연락처</p>
            <Input text='-를 제외한 숫자만 입력해주세요.'/>
        </div>
    ); 
}

export default JoinTel; 
