import BottomTextOnly from "../components/BottomTextOnly";
import ElectionCommission from "../components/ElectionCommission";
import LikelionPeople from "../components/LikelionPeople";
import PageTitle from "../components/PageTitle";
import { images } from '../utils/images';


const About = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-center">
                <PageTitle title={'만든이들'} line={false} />
                <div className="w-full flex justify-evenly py-8">
                    <div>
                        <img src={images.LikelionLogo} alt="멋사로고" className="w-28" />
                        <p className="mt-2 -mb-1">성결대학교</p>
                        <p>멋쟁이사자처럼</p>
                    </div>
                    <div>
                        <img src={images.LikelionLogo} alt="선관위로고" className="w-28" />
                        <p className="mt-2 -mb-1">제 40대</p>
                        <p>선거관리위원회</p>
                    </div>
                </div>
                <div>
                    성결대학교 제 40대 선거관리위원회에서<br />
                    <span className="pointColor">2024 총선거</span>를 계획하였습니다.<br />
                    성결대학교 <span className="pointColor">멋쟁이사자처럼 11기</span>에서 <br />웹사이트를 제작하였습니다.
                </div>

                <LikelionPeople />
                <ElectionCommission />
            </div>
            <div className="bottomText absolute text-center left-0 right-0 bottom-1">제40대선거관리위원회</div><BottomTextOnly />
        </div>
    )
}

export default About;