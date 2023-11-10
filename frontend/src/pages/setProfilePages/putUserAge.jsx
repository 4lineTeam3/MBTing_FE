import React from 'react';
import Select from 'react-select';



const customDropdownIndicator = () => {
return (
    <div style={{ display: 'none' }}></div>
);
};

const customIndicatorSeparator = () => {
  return null;
};

const customStyles = {
control: base => ({
    ...base,
    border: '1px solid #CECECE',
    borderRadius: '0.3125rem',
    background: '#FFF',
    width: "24.3rem",
    marginLeft:"5%",
    marginTop:"0.62rem",
    height: "3rem",
    paddingLeft:"0.3rem",
    paddingRight:"0.3rem",
    fontSize: "0.9375rem",
    fontFamily: 'GmarketSansMedium'
    
}),

option: base => ({
    ...base,
    fontSize: "0.9375rem",
    fontFamily: 'GmarketSansMedium',
    width: "24.3rem",
    marginLeft:"5%",
}),

option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? '#FFF' : 'transparent',
    color: isFocused ? '#41A46D;' : '#000',
}),

menu: base => ({
    ...base,
    width: "24.3rem",
    marginLeft: "5%",
    fontSize: "0.9375rem",
    fontFamily: 'GmarketSansMedium',
    textAlign: "center",
    paddingLeft:"0"
}),

};

const titleStyle={
    color: "#000",
    fontFamily: "GmarketSansMedium",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginLeft:'5%',
    marginTop:'1.25rem'
}

function putUserAge() {
const options = [];
options.push({ value: 'default', label: '출생년도를 입력하세요', isDisabled: true }); 

for (let year = 2020; year >= 1950; year--) {
    options.push({ value: year, label: `${year}년` });
}

return (
    <div>
    <div style={titleStyle}>출생년도</div>
    <Select
        id="birthYear"
        options={options}
        components={{ DropdownIndicator: customDropdownIndicator, IndicatorSeparator: customIndicatorSeparator }}
        styles={customStyles}
        placeholder="출생년도를 입력하세요"
    />
    </div>
);
}

export default putUserAge;
