
import questionBack from '../../img/questionBack.png'
import MatchingHeader from './matchinHeader';
import PersonContainer4 from './personContainer4'
import PersonContainer5 from './personContainer5';
import PersonContainer6 from './personContainer6';
import PersonContainer7 from './personContainer7';
import PersonContainer8 from './personContainer8';
import PersonContainer9 from './personContainer9';
import PersonContainer10 from './personContainer10';
import PersonContainer11 from './personContainer11';
import PersonContainer12 from './personContainer12';


function MorePage(){
    const backgroundStyle = {
        backgroundImage: `url(${questionBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        fontFamily: "GmarketSansMedium",
        height: '100vh'
    };

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
        fontSize: "1.4375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }



    return(

        <div style={backgroundStyle}>
            <MatchingHeader/>

            <div>
            <div style={titleStyle}>흰둥이</div> 
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

            <div style={lineContainer}>
            <PersonContainer10/>
            <PersonContainer11/>
            <PersonContainer12/>
            </div>


        </div>
    ); 
}

export default MorePage;