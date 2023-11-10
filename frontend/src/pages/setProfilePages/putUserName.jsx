
function putUserName(){

    const titleStyle={
        color: "#000",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        marginLeft:'5%',
        marginTop:'1.72rem'
    }

    const inputStyle={
        '::placeholder': {
            color: '#CECECE',
        },
        marginLeft:"5%",
        marginTop:"0.63rem",
        width: "23.125rem",
        height: "2.8125rem",
        flexShrink: "0",
        fontFamily: "GmarketSansMedium",
        fontSize: "0.875rem",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "normal",
        paddingLeft:"0.94rem",
        borderRadius: "0.3125rem",
        border: "1px solid #CECECE",
        background: "#FFF",
    }

    return(
        <div>
            <div style={titleStyle}>닉네임</div>
            <input type="name" placeholder="닉네임을 입력하세요" style={inputStyle}/>
        </div>
    );
}

export default putUserName;