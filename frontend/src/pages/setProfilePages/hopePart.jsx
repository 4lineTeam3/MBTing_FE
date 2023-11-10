import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.active ? 'WHITE' : '#000'};
    background: ${props => props.active ? '#43A970' : 'WHITE'};
    text-align: center;
    padding-left:0.8rem;
    padding-right:0.8rem;
    padding-top:0.4rem;
    padding-bottom:0.4rem;
    flex-shrink: 0;
    border-radius: 1.88rem;
    font-family: GmarketSansMedium;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border: 1px solid;
    border-color: #43A970;

    &:hover {
        color: #CECECE;
        border-color: #43A970;
    }
`;

function HopePart(){
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (buttonName) => {
        const index = selectedButtons.indexOf(buttonName);
        if (index !== -1) {
            // 이미 선택된 버튼이면 선택 해제
            const updatedButtons = [...selectedButtons.slice(0, index), ...selectedButtons.slice(index + 1)];
            setSelectedButtons(updatedButtons);
        } else {
            // 선택되지 않은 버튼이면 선택
            setSelectedButtons([...selectedButtons, buttonName]);
        }
    }

    const titleStyle={
        color: "#000",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        marginLeft:'5%',
        marginTop:'1.25rem'
    }

    const buttonContainer={
        display: "flex",
        marginLeft: "5%",
        gap:"0.62rem",
        marginTop:"0.63rem"
    }

    return(
        <div>
            <div style={titleStyle}>관심있는 개발 영역</div>
            <div style={buttonContainer}>
                <Button id="mobilewBtn" active={selectedButtons.includes('모바일 웹')} onClick={() => handleButtonClick('모바일 웹')}>
                    모바일 웹
                </Button>
                <Button id="pcwBtn" active={selectedButtons.includes('PC 웹')} onClick={() => handleButtonClick('PC 웹')}>
                    PC 웹
                </Button>
                <Button id="andBtn" active={selectedButtons.includes('안드로이드 앱')} onClick={() => handleButtonClick('안드로이드 앱')}>
                    안드로이드 앱
                </Button>
                <Button id="iosBtn" active={selectedButtons.includes('IOS 앱')} onClick={() => handleButtonClick('IOS 앱')}>
                    IOS 앱
                </Button>
            </div>
        </div>
    );
}

export default HopePart;
