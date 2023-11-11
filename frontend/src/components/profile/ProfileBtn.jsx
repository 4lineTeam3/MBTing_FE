import React from 'react';

function ProfileBtn(){ 
    const backgroundStyle = {
        width: '24.6875rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background:' #42A86F', 
        display:'flex', 
        justifyContent:'center', 
        margin:'0 auto', 
        marginTop:'5%'
    };
    const btn = { 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium',
        fontSize: '1rem', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        lineHeight: 'normal', 
        color: '#FFF', 
        border:'none', 
        background:'none'
    }

    return(
        <div style={backgroundStyle}>
            <button style={btn}>오픈채팅 링크로 연결하기</button>
        </div>
    ); 
}

export default ProfileBtn; 


