import React from 'react';
import Input from "../../components/join/input"; 
import { Link } from 'react-router-dom';


function JoinButton(){ 
    const emailText = { 
        color: '#000',
        fontFamily:'GmarketSansMedium',
        fontSize:'font-size: 1rem;', 
        margin:'0', 
        display:'flex', 
        marginLeft:'6.5%', 
        fontWeight:'700',
        marginLeft:'0.88rem'
    }
    
    const smallText = {
        color: '#3E3E3E',
        fontFamily:'GmarketSansTTF',
        width: "14.8125rem",
        height: "1rem;",
        fontSize:'font-size: 0.875rem;',
        margin:'0',
        display:'flex', 
        marginLeft:'6.5%', 
        fontWeight:'300',
        marginLeft:'1.2rem',
        marginBottom:'0.75rem'
    }

    const circleStyle={
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "50%",
        background: "#fff",
        border: "2px solid #D9D9D9"
    }

    const smallCircleStyle={
        width: "0.9375rem",
        height: "0.9375rem",
        borderRadius: "50%",
        background: "#fff",
        border: "2px solid #D9D9D9",
        marginLeft:"0.25rem"
    }

    const line1Style={
        marginTop:"1.5rem",
        marginBottom:"2.13rem",
        marginLeft:'5%',
        display:"flex",
        flexDirection: 'row'
    }

    const line1Style2={
        marginLeft:'5%',
        display:"flex",
        flexDirection: 'row'
    }

    const btnStyle={
        width: "23.125rem",
        height: "2.8125rem",
        flexShrink: "0",
        marginTop:"1.06rem",
        marginLeft:"1.88rem",
        marginRight:"1.88rem",
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Gmarket Sans TTF",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        borderRadius: "0.3125rem",
        borderColor:"#43AA70",
        background: "linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)",
        boxShadow: "none",
        marginBottom:"5rem"
    }

    return(
        <div>


            <div style={line1Style}>
                <div style={circleStyle}></div><p style={emailText}>약관 전체 동의</p>
            </div>

            <div style={line1Style2}>
                <div style={smallCircleStyle}></div><p style={smallText}>(필수) 본인은 만 14세 이상입니다.</p>
            </div>

            <div style={line1Style2}>
                <div style={smallCircleStyle}></div><p style={smallText}>(필수) 서비스 이용약관 동의</p>
            </div>

            <div style={line1Style2}>
                <div style={smallCircleStyle}></div><p style={smallText}>(필수) 개인정보 수집 및 이용 동의</p>
            </div>

            <div style={line1Style2}>
                <div style={smallCircleStyle}></div><p style={smallText}>(선택) 광고성 정보 수신 전체 동의</p>
            </div>

            <Link to='/auth/'><button style={btnStyle}>동의하고 가입하기</button></Link>

        </div>
    ); 
}

export default JoinButton; 