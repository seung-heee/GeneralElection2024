import Back from "../components/Back";
import PageTitle from "../components/PageTitle";
import { useLocation } from 'react-router-dom';
import Candidates from '../json/Candidates.json';

const CandidateInfo = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <div className="relative">
            <Back />

            <div className="flex flex-col items-center justify-center text-center mt-8">
                <PageTitle title={title} line={true} />
            </div>

            <div className="w-10/12 text-center break-keep mx-auto">2024 총선거 <span className="pointColor">{title} 입후보자</span> 공약집과 유세영상을 보실 수 있습니다.</div>
            <div>
                <div className="Subtitle text-center">-단과대학-</div>
                <div className="flex flex-col justify-center items-center">
                    <button className="CandidateBtn">{title}</button>
                </div>
            </div>
            <div>
                <div className="Subtitle text-center">-학부(과)-</div>
                <div className="flex flex-col justify-center items-center">
                    {Candidates.map((candidate) => {
                        return (
                            <>
                                {title === candidate.college ?
                                    <>
                                        <button className={`${candidate.department === '' ? "hidden" : ''} CandidateBtn`}>{candidate.department}</button>
                                    </> : <></>}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CandidateInfo;