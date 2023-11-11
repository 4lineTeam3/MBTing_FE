import React from 'react';

function ProfileMbti(props){ 
    const {detail1, detail2, detail3} = props; 
    const ProfileMbtiStyle = {
        color: '#000',
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '1.875rem', 
        display: 'flex', 
        justifyContent: 'center', 
    };
    const ul = {
        margin:'0.5rem'
    };

    return(
        <div style={ProfileMbtiStyle}>
            <ul style={ul}>
                <li>{detail1}</li>
                <li>{detail2}</li>
                <li>{detail3}</li>
            </ul>
        </div>
    ); 
}

export default ProfileMbti; 

