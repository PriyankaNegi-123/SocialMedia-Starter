import React from 'react'
import cover from '../../img/cover.jpg'
import profileImg from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={cover} alt='cover'/>
            <img src={profileImg} alt='profile'/>
        </div>
    </div>
  )
}

export default ProfileCard