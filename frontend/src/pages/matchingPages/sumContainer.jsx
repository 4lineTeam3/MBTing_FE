import PictureContainer from "./pictureContainer";
import { Link } from 'react-router-dom';

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
        fontFamily: "Gmarket Sans TTF",
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
        fontFamily: "Gmarket Sans TTF",
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
            <div style={titleStyle}>차은주 선생님</div>
            <Link to="/More"><button style={buttonStyle}>more ></button></Link>
        </div>

        <div style={lineContainer}>
            <PictureContainer/>
            <PictureContainer/>
            <PictureContainer/>
        </div>

        <div style={lineContainer}>
            <PictureContainer/>
            <PictureContainer/>
            <PictureContainer/>
        </div>

        
    </div>
    )
    
}

export default sumContainer;