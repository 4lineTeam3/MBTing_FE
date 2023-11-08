import React from 'react';
import picture from '../../img/person.png';
import PersonEx from './personExContainer';

function PictureContainer(){

    const containerStyle={
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "6.94444rem",
        height: "9.375rem",
        flexShrink: "0",
        borderRadius: "0.625rem",
        background: "#FFF",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    }

    const imgStyle={
        marginBottom:"1.25rem",
        width: "6.1875rem",
        height: "7.8125rem",
    }

    const personExStyle = {
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
    }

    return(
        <div style={containerStyle}>
            <img src={picture} alt="Person" style={imgStyle} />
            <div style={personExStyle}>
                <PersonEx/>
            </div>
        </div>
    );

}

export default PictureContainer;
