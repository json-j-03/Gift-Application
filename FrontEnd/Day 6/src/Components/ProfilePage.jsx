// ProfilePage.js
import React from 'react';
import '../css/ProfilePage.css';

const ProfilePage = () => {
  const user = {
    name: 'Deepak Sidhardh',
    email: 'DeepakSidhardh20@gmail.com',
    address: '1234 Main St, City, Country',
    phone: '7397012386',
  };

  const profilePhotoURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'; // Replace with your profile photo URL

  return (
    <div className='deeps'>
    <div className="profile-page-container">
      <div className="profile-header">
        <img src={profilePhotoURL} alt="Profile" className="profile-photo" />
        <h2 className="profile-title">My Profile</h2>
      </div>
      <div className="profile-info">
        <div className="profile-item">
          <span className="profile-label">Name:</span>
          <span className="profile-value">{user.name}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{user.email}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Address:</span>
          <span className="profile-value">{user.address}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Phone:</span>
          <span className="profile-value">{user.phone}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
