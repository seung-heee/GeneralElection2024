import PageTitle from "../components/PageTitle";

const Election = () => {
    return (
        <>
            <div className="relative">
                <div className="flex flex-col items-center justify-center text-center">
                    <PageTitle title={'총선거란?'} line={false} />
                    <div className="p-6 break-keep">2024년 새로이 설립될 성결대학교의 총학생자치기구(총학생회, 7단과대학 학생회, 학부(과) 학생회)를 학우들의 의견으로 직접 선출하기 위해 진행되는 선거</div>
                    <div>
                        <p className="Subtitle">-일시-</p>
                        <p>2023.11.20-11.22 <br />10:00-20:00</p>
                    </div>
                    <div>
                        <p className="Subtitle">-위치-</p>
                        <p>학생회관 4층 체육관</p>
                    </div>
                    <div>
                        <p className="Subtitle">-필수사항-</p>
                        <p>모바일학생증</p>
                    </div>
                </div>
                <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
            </div>
        </>
    )
}

export default Election;