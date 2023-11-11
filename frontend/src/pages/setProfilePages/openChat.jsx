
function openChat(){

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
            <div style={titleStyle}>카카오 오픈채팅 링크</div>
            <input id="chatting" type="name" placeholder="연락을 받기 위한 오픈채팅 링크를 입력해주세요." style={inputStyle}/>
        </div>
    );
}

export default openChat;