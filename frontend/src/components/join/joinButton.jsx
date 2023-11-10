import React from 'react';
import Input from "../../components/join/input"; 

function JoinButton(){ 
    const emailText = { 
        color: '#000',
        fontFamily:'GmarketSansMedium',
        fontSize:'font-size: 1rem;', 
        margin:'0', 
        display:'flex', 
        marginLeft:'6.5%', 
        fontWeight:'700'
    }

    const circleStyle={
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "50%",
        background: "#fff",
        border: "2px solid #D9D9D9"
    }

    const line1Style={
        marginTop:"3.5rem",
        marginLeft:'5%',
        display:"flex",
        flexDirection: 'row'
    }

    return(
        <div>


            <div style={line1Style}>
                <div style={circleStyle}></div><p style={emailText}>약관 전체 동의</p>
            </div>


        </div>
    ); 
}

export default JoinButton; 