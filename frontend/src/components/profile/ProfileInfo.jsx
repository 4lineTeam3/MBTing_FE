import React from 'react';

function ProfileInfo(props){ 
    const {name, age, tech} = props; 
    const profileInfoStyle = {
        paddingTop:'10%', 
        color: '#000', 
        fontFamily: 'GmarketSansMedium', 
        fontSize:'1.125rem', 
        display:'flex', 
        justifyContent:'center', 
    };

    return(
        <div style={profileInfoStyle}>
            <p style={{fontWeight:'bold', fontSize:'1.5rem', padding:'0', margin:'0', marginRight:'3%'}}>{name}</p>
            <p style={{padding:'0', margin:'0', display:'flex', marginRight:'1%', marginTop:'1%'}}>{age}</p>
            <p style={{padding:'0', margin:'0', display:'flex',  marginTop:'1%'}}>{tech}</p>
        </div>
    ); 
}

export default ProfileInfo; 

