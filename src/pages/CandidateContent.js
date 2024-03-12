import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import Candidates from '../json/Candidates.json';
import ByCandidates from '../json/ByCandidates.json';
import EmptyCampaignVideo from '../components/EmptyCampaignVideo';
import CampaignVideo from './CampaignVideo';

export const CandidateContent = () => {
    const location = useLocation();
    const title = location.state.title;

    const openManifesto = Manifesto => {
        window.open(Manifesto, '_blank');
    };


    const openPledgeBook = PledgeBook => {
        window.open(PledgeBook, '_blank');
    };
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={title} line={true} />
            </div>

            <div className='flex flex-col justify-center items-center py-20'>
                {Candidates.map((candidate) => {
                    return (
                        <>
                            {candidate.department === title ?
                                <>
                                    <button className="CandidateBtn0" onClick={() => { openManifesto(candidate.Manifesto) }}>소견서</button>
                                    <button className="CandidateBtn0" onClick={() => { openManifesto(candidate.PledgeBook) }}>공약집</button>
                                    <button className={`CandidateBtn0 ${candidate.CampaignVideo == "" ? 'hidden' : ''}`}>
                                        <Link to={candidate.CampaignVideo} target="_blank" className={``}>유세영상</Link>
                                    </button>
                                </> : ''}
                        </>
                    )
                })}
            </div >
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div >
    )
}


export const ByCandidateContent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const title = location.state.title;

    const openPledgeBook = (length, title) => {
        navigate('/by-election/PledgeBook', { state: { length, title } });
    };

    const openManifesto = (length, title) => {
        navigate('/by-election/Manifesto', { state: { title } });
    };

    const openCampaignVideo = title => {
        navigate('/by-election/CampaignVideo', { state: { title } });
    };

    

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={title} line={true} />
            </div>

            <div className='flex flex-col justify-center items-center py-20'>
                {ByCandidates.map((candidate) => {
                    return (
                        <>
                            {candidate.department === title ?
                            <>
                            <button className="CandidateBtn0" onClick={() => { openManifesto(candidate.Manifesto, title) }}>소견서</button>
                            <button className="CandidateBtn0" onClick={() => { openPledgeBook(candidate.PledgeBook, title) }}>공약집</button>
                            <button
                                onClick={()=>{ openCampaignVideo(candidate.CampaignVideo) }}
                                className={`CandidateBtn0 ${candidate.CampaignVideo == "" ? 'hidden' : ''}`}>
                                유세영상
                            </button>
                            </> : ''}
                        </>
                    )
                })}
            </div >
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div >
    )
}
