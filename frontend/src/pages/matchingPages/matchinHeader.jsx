import icon from '../../img/PersonIcon.png'

function MatchingHeader() {
    const backgroundStyle = {
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        height: "4rem",
        flexShrink: "0",
        background: "linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)",
        marginBottom:"4.25rem"
    };

    const logoStyle = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Gmarket Sans TTF",
        fontSize: "1.5625rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    };

    const heartStyle = {
        color: "#EA5E5D",
        fontFamily: "Gmarket Sans TTF",
        fontSize: "1.5625rem",
        fontstyle: "normal",
        fontWeight: "300",
        lineHeight: "normal"
    };

    const iconStyle = {
        display:"relative",
        position:"absolute",
        right:"1.5rem",
        backgroundImage: `url(${icon})`,
        width: "1.875rem",
        height: "1.875rem"
    };

    return (
    <div style={backgroundStyle}>
        <div style={logoStyle}>
            MBTing-<span style={heartStyle}>❥</span>
        </div>
        <div style={iconStyle}></div>
    </div>
    );
}

export default MatchingHeader;
