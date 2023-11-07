import React from 'react';

function ResultExplain(props) { 
    const { detail1, detail2, detail3 } = props;
    const backgroundStyle = {
        color: '#000',
        fontFamily: 'GmarketSansMedium', 
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '1.875rem', 
        display: 'flex', 
        justifyContent: 'center'
    };

    return (
        <div style={backgroundStyle}>
            <ul>
                <li>{detail1}</li>
                <li>{detail2}</li>
                <li>{detail3}</li>
            </ul>
        </div>
    ); 
}

export default ResultExplain;
