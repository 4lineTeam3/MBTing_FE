import React, { useState } from 'react';
import axios from 'axios';


function Add() {
  const [specs, setSpecs] = useState(['']); // 초기에 하나의 입력란을 가진 배열

  const titleStyle = {
    color: "#000",
    fontFamily: "GmarketSansMedium",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginLeft: '5%',
    marginTop: '1.72rem'
  };

  const inputStyle = {
    '::placeholder': {
      color: '#CECECE',
    },
    display: "flex",
    marginLeft: "5%",
    marginTop: "0.63rem",
    width: "23.125rem",
    height: "2.8125rem",
    flexShrink: "0",
    fontFamily: "GmarketSansMedium",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal",
    paddingLeft: "0.94rem",
    borderRadius: "0.3125rem",
    border: "1px solid #CECECE",
    background: "#FFF",
    marginBottom: "0.62rem",
  };

  const addStyle = {
    display: "flex",
    alignItems: "center",
    width: "23.125rem",
    height: "2.8125rem",
    flexShrink: "0",
    borderRadius: "0.3125rem",
    border: "1px solid #CECECE",
    background: "#FFF",
    marginLeft: "5%",
    paddingLeft: "0.94rem",
    color: "#CECECE",
    fontFamily: "GmarketSansMedium",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal",
    cursor: 'pointer',
  };

  const handleAddSpec = () => {
    if (specs.length < 4) {
      setSpecs([...specs, '']);
    }
  };

  const handleSpecChange = (index, value) => {
    const updatedSpecs = [...specs];
    updatedSpecs[index] = value;
    setSpecs(updatedSpecs);
  };

  return (
    <div>
      <div style={titleStyle}>스펙</div>
      {specs.map((spec, index) => (
        <div key={index}>
          <input
            id="spec"
            type="name"
            placeholder="관심사와 능력을 보여줄 수 있는 스펙을 입력하세요"
            style={inputStyle}
            value={spec}
            onChange={(e) => handleSpecChange(index, e.target.value)}
          />
        </div>
      ))}
      <div style={addStyle} onClick={handleAddSpec}>
        <div>+ 추가</div>
      </div>
    </div>
  );
}

export default Add;
