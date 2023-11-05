import { useLocation, useNavigate } from 'react-router-dom';
import PageTitle from "../components/PageTitle";

const CandidateContent = () => {
    const location = useLocation();
    const title = location.state.title;

    const navigate = useNavigate();

    const HandleManifesto = () => {
        navigate('/Manifesto', { state: { title: title } });
    }
    const HandleCampaignVideo = () => {
        navigate('/CampaignVideo', { state: { title: title } });
    }
    const HandlePledgeBook = () => {
        navigate('/PledgeBook', { state: { title: title } });
    }

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={title} line={true} />
            </div>

            <div className='flex flex-col justify-center items-center py-20'>
                <button className="CandidateBtn0" onClick={(e) => { HandleManifesto(e) }}>소견서</button>
                <button className="CandidateBtn0" onClick={(e) => { HandlePledgeBook(e) }}>공약집</button>
                <button className="CandidateBtn0" onClick={(e) => { HandleCampaignVideo(e) }}>유세영상</button>
            </div>
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div>
    )
}

export default CandidateContent;