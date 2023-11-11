
import { Link } from 'react-router-dom';
import PersonContainer9 from './personContainer9';
import PersonContainer8 from './personContainer8';
import PersonContainer7 from './personContainer7';
import PersonContainer4 from './personContainer4';
import PersonContainer5 from './personContainer5';
import PersonContainer6 from './personContainer6';

function sumContainer(){
    const lineContainer={
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:"1.56rem",
        marginTop:"1.25rem"
    }

    const titleStyle={
        display:"flex",
        marginLeft:"1.44rem",
        color: "#000",
        fontFamily: "GmarketSansMedium",
        fontSize: "1.4375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const buttonStyle = {
        display:"flex",
        position: "absolute",
        right:"1.5rem",
        background: "none",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
        textDecoration: "none",
        color: "#000",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
        };

    const title={
        display:"flex",
        flexDirection:"row",

    }

    const containerStyle={
        marginBottom:"1.25rem"
    }

    return(
    <div style={containerStyle}>
        <div style={title}>
            <div style={titleStyle}>흰둥이</div>
            <Link to="/More"><button style={buttonStyle}>more ></button></Link>
        </div>

        <div style={lineContainer}>
            <PersonContainer4/>
            <PersonContainer5/>
            <PersonContainer6/>
        </div>

        <div style={lineContainer}>
            <PersonContainer7/>
            <PersonContainer8/>
            <PersonContainer9/>
        </div>

        
    </div>
    );
    
}

export default sumContainer;