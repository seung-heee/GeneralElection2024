import PageTitle from "../components/PageTitle";
import '../App.css';
import { useNavigate } from "react-router-dom";
import BottomTextOnly from "../components/BottomTextOnly";
import ScrollToTop from "../components/ScrollToTop";

export const Candidate = () => {
    const navigate = useNavigate();

    const HandleLink = (e) => {
        navigate('/main-election/CandidateInfo', { state: { title: e.target.innerText } });
    }
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={'입후보자 정보'} line={true} />
                <div className="p-3 break-keep">
                    <p>2024 총선거 입후보자 공약집입니다.</p>
                    <p>공약집을 알고 학우 여러분들의 <br />소중한 권리를 행사해주세요.</p>
                </div>
                <div className="w-full mb-5">
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>인문대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>글로벌경영기술대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>예술대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>신학대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>사범대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>사회과학대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>IT공과대학</button>
                </div>
            </div>
            <BottomTextOnly />
            <ScrollToTop />
        </div>
    )
}


export const ByCandidate = () => {
    const navigate = useNavigate();

    const HandleLink = (e) => {
        navigate('/by-election/CandidateInfo', { state: { title: e.target.innerText } });
    }
    const StudentCouncil = (e) => {
        navigate('/by-election/CandidateContent', { state: { title: e.target.innerText } });
    }

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={'입후보자 정보'} line={true} />
                <div className="p-3 break-keep">
                    <p>2024 보궐선거 입후보자 공약집입니다.</p>
                    <p>공약집을 알고 학우 여러분들의 <br />소중한 권리를 행사해주세요.</p>
                </div>
                <div className="w-full mb-5">
                    <button className="CandidateBtn mx-auto" onClick={(e) => { StudentCouncil(e) }}>총학생회</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>인문대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>예술대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>신학대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>사회과학대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>IT공과대학</button>
                    <button className="CandidateBtn mx-auto" onClick={(e) => { HandleLink(e) }}>글로벌경영기술대학</button>
                </div>
            </div>

            <BottomTextOnly />
            <ScrollToTop />
        </div>
    )
}