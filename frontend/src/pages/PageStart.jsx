import React from 'react';
import resultBack from '../img/resultBack.png'; 
import Zzanggoo from '../img/Zzanggoo.png'; 
import { Link } from 'react-router-dom';

function PageStart(){ 
    const backgroundStyle = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: '100vh'
    };
    const btn = { 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium',
        fontSize: '1.5rem', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        lineHeight: 'normal', 
        color: '#FFF', 
        border:'none', 
        background:'none', 
        marginTop:'8%'
    }
    const btnBack = {
        width: '20.6875rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.625rem', 
        background:' #42A86F', 
        display:'flex', 
        justifyContent:'center', 
        margin:'0 auto', 
        marginTop:'15%'
    };
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
        marginTop:'3%'
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
        <div style={backgroundStyle}>
            <img style={{marginTop:'60%'}}src={Zzanggoo}/>
            <div style={btnBack}>
                <Link to='/question'>
                    <button style={btn}>검사시작</button>
                </Link>
            </div>
            <div style={btnBack2}>
                <button style={btn2}>카카오톡 공유하기</button>
            </div>
        </div>
    ); 
}

export default PageStart; 


