import PageTitle from "../components/PageTitle";
import Turnout from "../components/Turnout";

const Voting = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={'투표율'} />
            </div>

            <div className="w-10/12 mx-auto break-keep text-center py-5">
                각 후보자들의 개표는 <span className="pointColor">최종 투표율이 50% 이상</span>이 되어야 진행됩니다.
                해당 기준을 충족하지 못할 시, 개표는 진행되지 않으며 해당 후보자는 <span className="pointColor">'투표율 미달'로 인한 미개표 '낙선'</span>이므로 이점 참고 부탁드리며
                많은 관심 부탁드립니다.
            </div>
            <Turnout />
        </div>
    )
}

export default Voting;