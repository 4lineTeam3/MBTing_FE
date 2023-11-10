import picture from '../../img/userPic/human10.png';

function personContainer(){

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
            paddingTop:"0.3rem"
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
        const explain={
        
            display:"flex",
            flexDirection:"column",
            bottom:"0",
            width: "6.9375rem",
            height: "2.1875rem",
            flexShrink: "0",
            borderRadius: "0rem 0rem 0.625rem 0.625rem",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.93) 0%, rgba(255, 255, 255, 0.86) 100%)",
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        }
    
        const line1={
            marginTop:"0.35rem",
            marginLeft:"0.44rem",
            display: "flex",
            color: "#000",
            fontfamily: "GmarketSansMedium",
            fontSize: "0.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        }
    
        const line2={
            marginLeft:"0.44rem",
            color: "#000",
            fontfamily: "GmarketSansMedium",
            fontSize: "0.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        }
    
        return(
            <div style={containerStyle}>
                <img src={picture} alt="Person" style={imgStyle} />
                <div style={personExStyle}>
                <div style={explain}>
            
            <div style={line1}>
                #<span id="pName">이세은</span>
                #<span id="pAge">23세</span>
            </div>

            <div style={line2}>
                #<span id="pPosition">프론트엔드</span>
                #<span id="pHope">IOS 앱</span>
            </div>
        </div>
                </div>
            </div>
        );
    
}

export default personContainer;