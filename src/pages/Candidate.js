import Back from "../components/Back";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import '../App.css';

const Candidate = () => {
    return (
        <div>
            <Back />
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={'입후보자 정보'} />
                <div className="p-6 break-keep">
                    <p>2024 총선거 입후보자 공약집입니다.</p>
                    <p>공약집을 알고 학우 여러분들의 <br />소중한 권리를 행사해주세요.</p>
                </div>
                <div className="w-full">
                    <button className="CandidateBtn mx-auto">인문대학</button>
                    <button className="CandidateBtn mx-auto">글로벌경영기술대학</button>
                    <button className="CandidateBtn mx-auto">예술대학</button>
                    <button className="CandidateBtn mx-auto">신학대학</button>
                    <button className="CandidateBtn mx-auto">사범대학</button>
                    <button className="CandidateBtn mx-auto">사회과학대학</button>
                    <button className="CandidateBtn mx-auto">IT 공과대학</button>
                </div>

            </div>
        </div>
    )
}

export default Candidate;