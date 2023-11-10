import { Link, useLocation } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import Candidates from '../json/Candidates.json';

const CandidateContent = () => {
    const location = useLocation();
    const title = location.state.title;

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
                                    <button className="CandidateBtn0"><Link to={candidate.Manifesto} target="_blank">소견서</Link></button>
                                    <button className="CandidateBtn0"><Link to={candidate.PledgeBook} target="_blank">공약집</Link></button>
                                    <button className="CandidateBtn0"><Link to={candidate.CampaignVideo} target="_blank">유세영상</Link></button>
                                </> : ''}
                        </>
                    )
                })}
            </div>
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div >
    )
}

export default CandidateContent;