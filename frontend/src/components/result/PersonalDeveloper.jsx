import React from 'react';
import Developerlmg from '../result/DeveloperImg'; 
import SmallINFJ from '../../img/MBTI/INFJsmall.png'; 
import SmallINTJ from '../../img/MBTI/INTJsmall.png'; 

function PersonalDeveloper(){ 
    const pdStyle = { 
        marginLeft:"7%", 
        marginRight:"7%"
    }
    const pdText = { 
        color: '#000', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: 'bolder', 
        lineHeight: 'normal'
    }
    const pdLanguage = {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: '100', 
        lineHeight: 'normal', 
        display:'flex'
    } 

    return(
        <div style={pdStyle}>
             <div style={pdText}>당신과 어울리는 개발자 유형</div>
             <div style={pdLanguage}>
                <Developerlmg image={SmallINFJ}/>
                <Developerlmg image={SmallINTJ}/>
            </div>
        </div>
    ); 
}

export default PersonalDeveloper; 

