import React from 'react';
import profileImg from '../../img/Profile/ProfileEx.png'; 

function ProfileImg(){ 
    const profileImgStyle = { 
        marginTop:'10%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '0 auto', 
        paddingTop:'10%'
    }

    return(
        <div style={profileImgStyle}>
            <img src={profileImg}/>
        </div>
    ); 
}

export default ProfileImg; 


