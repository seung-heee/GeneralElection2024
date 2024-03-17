import React from 'react';
import ByCandidates from '../json/ByCandidates.json';
import { useLocation } from 'react-router-dom';

const CampaignVideo = () => {
  const location = useLocation();
  const videoURL = location.state.videoURL;

  console.log(videoURL)

  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <iframe className='w-full h-[250px] relative z-10' src={`https://www.youtube.com/embed/${videoURL}?autoplay=1&playsinline=1`}
        title="YouTube video player" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen></iframe>
    </div>
  );
};

export default CampaignVideo;