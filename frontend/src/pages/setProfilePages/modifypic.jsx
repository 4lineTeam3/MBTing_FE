import React, { useState } from 'react';
import profileset from '../../img/profileset.png';
import profilesetIcon from '../../img/profilesetIcon.png';

const Modifypic = () => {
  const [profileImage, setProfileImage] = useState(profileset);
  const iconImage = profilesetIcon;

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerStyle = {
    display: 'flex',
  };

  const profilesetStyle = {
    backgroundImage: `url(${profileImage})`,
    height: '6.25rem',
    width: '6.25rem',
    marginLeft: '9.06rem',
    marginTop: '1.25rem',
    cursor: 'pointer',
    objectFit: 'cover'
  };

  const iconStyle = {
    backgroundImage: `url(${iconImage})`,
    display: 'relative',
    position: 'absolute',
    width: '1.2rem',
    height: '1.2rem',
    marginTop: '6rem',
    marginLeft: '14rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <label>
        <input type="file" style={{ display: 'none' }} onChange={handleProfileImageChange} accept="image/*" />
        <div style={profilesetStyle}></div>
      </label>
      <div style={iconStyle}></div>
    </div>
  );
};

export default Modifypic;
