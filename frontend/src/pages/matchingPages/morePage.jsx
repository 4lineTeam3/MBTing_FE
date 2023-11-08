
import questionBack from '../../img/questionBack.png'
import PictureContainer from './pictureContainer';
import MatchingHeader from './matchinHeader';

function MorePage(){
    const backgroundStyle = {
        backgroundImage: `url(${questionBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        objectFit: 'cover',
        height: 'auto'
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
        fontFamily: "Gmarket Sans TTF",
        fontSize: "1.4375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }



    return(

        <div style={backgroundStyle}>
            <MatchingHeader/>

            <div>
            <div style={titleStyle}>차은주 선생님</div> 
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
    ); 
}

export default MorePage;