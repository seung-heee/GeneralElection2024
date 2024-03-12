import React from 'react';
import ByCandidates from '../json/ByCandidates.json';

const CampaignVideo = ({title}) => {
  return (
    <div>
    {ByCandidates.map((candidate)=> {
      const thisvideo = candidate.department === title ? candidate.CampaignVideo : ''
      console.log(thisvideo)
      return (
        <iframe width="300" height="200" 
        src={thisvideo}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        )})}
    </div>
  );
};

export default CampaignVideo;