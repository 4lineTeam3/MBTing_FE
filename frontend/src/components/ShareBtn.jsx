import React from 'react';
import Zzanggoo from '../img/Zzanggoo.png'; 
import { Link } from 'react-router-dom';

function ShareBtn(){ 
    const btn2 = { 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium',
        fontSize: '1.5rem', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        lineHeight: 'normal', 
        color: '#FFF', 
        border:'none', 
        background:'none', 
        marginTop:'2%'
    }
    const btnBack2 = {
        width: '20.6875rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background:' #42A86F', 
        display:'flex', 
        justifyContent:'center', 
        margin:'0 auto', 
        marginTop:'5%'
    };

    return(
        // <div style={backgroundStyle}>
            <div style={btnBack2}>
                <button style={btn2}>카카오톡 공유하기</button>
            </div>
        // </div>
    ); 
}

export default ShareBtn; 


