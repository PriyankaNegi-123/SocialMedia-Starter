import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import InfoCard from '../infoCard/InfoCard'


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft