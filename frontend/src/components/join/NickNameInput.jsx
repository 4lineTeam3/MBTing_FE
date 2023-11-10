import React from 'react';
import Input from "../../components/join/input"; 

function NickNameInput(){ 
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
            <p style={pwText}>닉네임</p>
            <Input text='2~16자 이내로 입력해 주세요.'/>
        </div>
    ); 
}

export default NickNameInput; 
