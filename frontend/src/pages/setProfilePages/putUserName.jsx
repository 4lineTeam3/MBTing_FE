// putUserName 컴포넌트
import React, { useState } from 'react';


function PutUserName({ onNicknameChange }) {
    const [nickname, setNickname] = useState('');

    const titleStyle = {
        color: "#000",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        marginLeft: '5%',
        marginTop: '1.72rem'
    }

    const inputStyle = {
        '::placeholder': {
            color: '#CECECE',
        },
        marginLeft: "5%",
        marginTop: "0.63rem",
        width: "23.125rem",
        height: "2.8125rem",
        flexShrink: "0",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.875rem",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "normal",
        paddingLeft: "0.94rem",
        borderRadius: "0.3125rem",
        border: "1px solid #CECECE",
        background: "#FFF",
    }

    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        setNickname(newNickname);
        onNicknameChange(newNickname); // 상위 컴포넌트로 변경된 닉네임 전달
    };

    return (
        <div>
            <div style={titleStyle}>닉네임</div>
            <input
                type="nickname"
                placeholder="닉네임을 입력하세요"
                style={inputStyle}
                value={nickname}
                onChange={handleNicknameChange}
            />
        </div>
    );
}

export default PutUserName;
