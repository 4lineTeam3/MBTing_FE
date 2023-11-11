import React from 'react';

function ProfileExplan(props){ 
    const {detail, name} = props; 
    const profileExplanStyle = {
        paddingTop:'2%', 
        color: '#42A66E', 
        fontFamily: 'GmarketSansMedium', 
        fontSize:'1.125rem', 
        display:'flex', 
        justifyContent:'center', 
    };

    return(
        <div style={profileExplanStyle}>
            <p>{detail}</p>
            <p style={{fontWeight:"bold", marginLeft:"2%"}}>{name}</p>
            <p style={{marginLeft:"2%"}}>유형</p>
        </div>
    ); 
}

export default ProfileExplan; 


