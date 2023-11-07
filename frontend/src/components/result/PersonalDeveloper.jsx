import React from 'react';
import Developerlmg from '../result/DeveloperImg'; 

function PersonalDeveloper(props){ 
    const { img1, img2 } = props; 
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
                <Developerlmg image={img1}/>
                <Developerlmg image={img2}/>
            </div>
        </div>
    ); 
}

export default PersonalDeveloper; 

