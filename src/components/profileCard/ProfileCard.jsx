import React from 'react'
import cover from '../../img/cover.jpg'
import profileImg from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={cover} alt='cover'/>
            <img src={profileImg} alt='profile'/>
        </div>
        <div className="ProfileName">
          <span>Priyanka Negi</span>
          <span>MERN Developer</span>
        </div>
        <div className="followStatus">
          <hr/>
          <div>
            <div className="follow">
              <span>6,890</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1</span>
              <span>Following</span>
            </div>

            {ProfilePage &&(
              <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
              </>
            )}
          </div>
          <hr/>
        </div>
        {ProfilePage ? "" : <span>My Profile</span> }
        
    </div>
  )
}

export default ProfileCard