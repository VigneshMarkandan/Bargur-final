import React from 'react'

const VideoComponent = () => {
  const cloudinaryVideoLink = "https://res.cloudinary.com/dkbnxsdyt/video/upload/v1721383210/bargur-vidoe/AGE_sunrise_Philippines_29_January_2020_1_online-video-cutter.com_1_dwwzyn.mp4";
  return (
    <div className='video-component'>
      <video muted autoPlay loop poster="/sites/default/files/poster.webp" playsInline preload="none" className="relative w-full h-full" >
      <source src={cloudinaryVideoLink} type="video/mp4" />
      </video>
    </div>
  )
}


export default VideoComponent