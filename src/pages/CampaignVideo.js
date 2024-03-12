import React from 'react';
import ByCandidates from '../json/ByCandidates.json';

const CampaignVideo = ({title}) => {
  return (
    <div>
    {ByCandidates.map((candidate)=> {
      const videoUrl = candidate.department === title ? candidate.CampaignVideo : ''
      return (
        <iframe width="300" height="200" 
        src={videoUrl}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        )})}
    </div>
  );
};

export default CampaignVideo;