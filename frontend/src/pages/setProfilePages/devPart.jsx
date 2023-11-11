import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.active ? '#43A970' : '#CECECE'};
    background: ${props => props.active ? '#FFF' : 'transparent'};
    text-align: center;
    font-family: GmarketSansMedium;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 6.25rem;
    height: 2.8125rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid ${props => props.active ? '#43A970' : '#CECECE'};

    &:hover {
        color: #43A970;
        border-color: #43A970;
    }
`;

function DevPart(){
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
            <div style={titleStyle}>개발 파트</div>
            <div style={buttonContainer}>
                <Button id="frontBtn" active={selectedButtons.includes('프론트엔드')} onClick={() => handleButtonClick('프론트엔드')}>
                    프론트엔드
                </Button>
                <Button id="backBtn" active={selectedButtons.includes('백엔드')} onClick={() => handleButtonClick('백엔드')}>
                    백엔드
                </Button>
                <Button id="uiuxBtn" active={selectedButtons.includes('UI UX')} onClick={() => handleButtonClick('UI UX')}>
                    UI UX
                </Button>
            </div>
        </div>
    );
}

export default DevPart;
