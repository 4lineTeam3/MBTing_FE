import icon from '../../img/backArrow.png'

function setProfileHeader() {
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
        fontFamily: "GmarketSansMedium",
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
        left:"0.94rem",
        top: "1.5rem",
        width: "1.875rem",
        height: "1.875rem"
    };

    return (
    <div style={backgroundStyle}>
        <div style={iconStyle}><img src={icon} alt="" /></div>
        <div style={logoStyle}>
            MBTing-<span style={heartStyle}>❥</span>
        </div>
    </div>
    );
}

export default setProfileHeader;
