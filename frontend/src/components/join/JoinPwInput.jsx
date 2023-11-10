import React from 'react';
import Input from "../../components/join/input"; 

function JoinPwInput(){ 
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
            <p style={pwText}>비밀번호</p>
            <Input text='영문/숫자/특수문자 혼합 8~20자'/>
            <Input text='비밀번호를 한 번 더 입력해 주세요.'/>
        </div>
    ); 
}

export default JoinPwInput; 
