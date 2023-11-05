import { useLocation } from "react-router-dom";
import PageTitle from "../PageTitle";

const CampaignVideo = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <div>{title}</div>
    )
}

export default CampaignVideo;