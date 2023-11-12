import PageTitle from "../components/PageTitle";
import { useLocation, useNavigate } from 'react-router-dom';
import Candidates from '../json/Candidates.json';
import CandidateContent from "./CandidateContent";

const CandidateInfo = () => {
    const location = useLocation();
    const title = location.state.title;

    const navigate = useNavigate();
    const HandleContent = (e) => {
        navigate('/CandidateContent', { state: { title: e.target.innerText } });
    }

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={title} line={true} />
            </div>

            <div className="w-10/12 text-center break-keep mx-auto">2024 총선거 <span className="pointColor">{title} 입후보자</span> 공약집과 유세영상을 보실 수 있습니다.</div>
            <div>
                <div className="Subtitle text-center">-단과대학-</div>
                <div className="flex flex-col justify-center items-center">
                    {Candidates.map((candidate) => {
                        return (
                            <>
                                {title === candidate.college && title === candidate.department ? (
                                    <>
                                        {candidate.Manifesto === "" ? (
                                            '입후보자가 없습니다.'
                                        ) : (
                                            <button className="CandidateBtn" onClick={(e) => { HandleContent(e) }}>{title}</button>
                                        )}
                                    </>) : null}
                            </>
                        )
                    })}
                </div >
            </div>
            <div>
                <div className="Subtitle text-center">-학부(과)-</div>
                <div className="flex flex-col justify-center items-center">
                    {Candidates.map((candidate) => {
                        return (
                            <>
                                {title === candidate.college ?
                                    <>
                                        <button
                                            onClick={(e) => { HandleContent(e) }}
                                            className={`${candidate.department === candidate.college ? "hidden" : ''} CandidateBtn`}>
                                            {candidate.department}
                                        </button>
                                    </> : <></>}
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div>
    )
}

export default CandidateInfo;