import React from 'react';

function profileText(){  
    const profileTextStyle = { 
        color: '#000', 
        fontFamily: 'GmarketSansMedium', 
        marginTop:"15%", 
        display:'flex', 
        marginLeft:'6.5%',
        flexDirection:"column"
        
    }

    const line1Style = {
        fontSize: "1.4375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        marginBottom: "0.94rem"

    }
    const line2Style={
        fontSize: "0.875rem",
        fontstyle: "normal",
        fontweight: "100",
        lineheight: "normal"

    }

    const text1="프로필을 설정해주세요."
    const text2="나를 나타내는 프로필 사진과 닉네임으로 등록하면"
    const text3="다른 이용자들이 나를 더 잘 파악할 수 있어요!"

    return(
        <div style={profileTextStyle}>
            <div style={line1Style}>{text1}</div>
            <div style={line2Style}>{text2}</div>
            <div style={line2Style}>{text3}</div>
        </div>
    ); 
}

export default profileText; 
