import React, { useState,useEffect } from 'react';
import axios from 'axios';

function LoginInput(){ 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('http://223.194.131.109:8000/auth/')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        axios.post('/auth/', {
            "email" : email,
            "password": password
        })
        .then(response => {
            console.log('서버 응답:', response.data);
        })
        .catch(error => {
            console.error('에러 발생:', error);
        });
        
        // const fetchData = async () => {
        //     try{
        //         const resultcartData = await Api.post('/auth/', 
        //             {
        //                 "email" : email,
        //                 "password" : password 
        //             }
        //         );

        //         console.log("result: ", resultcartData)
        //     } catch (error){
        //         console.log(error);
        //     }
        // };

        // fetchData();
    }
    const loginInputStyle = { 
        fontFamily: 'GmarketSansMedium', 
        width: '23.125rem', 
        height: '5.625rem', 
        flexShrink: '0', 
        borderRadius: '0.3125rem', 
        border: '1px solid #CECECE', 
        background: '#FFF', 
        display:'flex', 
        justifyContent:'center', 
        margin: '0 auto', 
        marginTop:'5%', 
        flexDirection: 'column', 
        marginLeft:'5%'
    }
    const inputStyle = {
        '::placeholder': {
            color: '#CECECE',
            fontFamily: 'GmarketSansMedium'
        },
        width: '100%', 
        height: '100%',
        boxSizing: 'border-box', 
        border: '1px solid #CECECE', 
        borderRadius: '0.3125rem', 
    }
    const btnStyle = { 
        width: '23.125rem', 
        height: '2.8125rem', 
        flexShrink: '0', 
        borderRadius: '0.3125rem', 
        background: 'linear-gradient(266deg, #43AA70 -2.67%, #3C9764 100%)', 
        color: '#FFF', 
        textAlign: 'center', 
        fontFamily: 'GmarketSansMedium', 
        fontSize: '0.9375rem', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        lineHeight: 'normal', 
        border: 'none', 
        marginLeft:'5%', 
        marginTop:'8%'
    }
    
    return(
        <div>
            {/* <form method='post' onSubmit={handleSubmit}> 
                <div style={loginInputStyle}>
                    <input style={inputStyle} placeholder="이메일 입력" value={email}  onChange={handleEmailChange} required />
                    <input style={inputStyle} placeholder="비밀번호 입력" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" onClick={()=>handleSubmit} style={btnStyle}>로그인</button>
            </form> */}
            <div style={loginInputStyle}>
                    <input style={inputStyle} placeholder="이메일 입력" value={email}  onChange={handleEmailChange} required />
                    <input style={inputStyle} placeholder="비밀번호 입력" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" onClick={handleSubmit} style={btnStyle}>로그인</button>
        </div>
    ); 
}

export default LoginInput; 
