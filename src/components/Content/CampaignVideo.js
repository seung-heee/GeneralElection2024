import { useLocation } from "react-router-dom"; import 'video-react/dist/video-react.css';

import React from 'react';
import { Player } from 'video-react';
import { images } from '../../utils/images';

const CampaignVideo = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <video controls playsInline autoplay>
            <source src={images.유세영상.인문대학.인문_영상}></source>
        </video>
    )
}

export default CampaignVideo;