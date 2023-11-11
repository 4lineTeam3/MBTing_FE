import React from 'react';

function ProfileMyPr(props){
    const {pr1, pr2, pr3} = props; 
    const MyPrStyle = {
        color: '#000',
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '1.875rem', 
        display: 'flex', 
        justifyContent: 'center', 
        width: '24.6875rem', 
        height: '14%rem', 
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background: '#FFF', 
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)', 
        margin:'0 auto', 
        marginTop:'5%'
    };
    const ul = {
        margin:'0.5rem'
    };

    return(
        <div style={MyPrStyle}>
            <ul style={ul}>
                <li>{pr1}</li>
                <li>{pr2}</li>
                <li>{pr3}</li>
            </ul>
        </div>
    ); 
}

export default ProfileMyPr; 