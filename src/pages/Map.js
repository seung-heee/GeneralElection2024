import Back from "../components/Back";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import { images } from '../utils/images';
import '../App.css';
import BottomTextOnly from "../components/BottomTextOnly";

const Map = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center mt-8">
                <PageTitle title={'배치도'} />
                <div className="px-10 py-2 break-keep">2024 총선거가 진행되는 장소는<br />
                    <span className="pointColor"> 학생회관 4층 체육관</span>입니다.<br />
                    아래 <span className="pointColor">단대 및 학부(과)의 배치도</span>를 <br /> 참고하여 주시기 바랍니다.
                </div>
                <div className="p-3">
                    <img src={images.Map} alt={'배치도'} />

                </div>
                <div className="grid grid-cols-3 p-3">
                    <img src={images.사과대} alt={'배치도'} />
                    <img src={images.공대} alt={'배치도'} />
                    <img src={images.신대} alt={'배치도'} />
                    <img src={images.사범대} alt={'배치도'} />
                    <img src={images.인문대} alt={'배치도'} />
                    <img src={images.예대} alt={'배치도'} />
                    <img src={images.글경대} alt={'배치도'} />
                </div>
                <div className="last"></div>
            </div>
        </div>
    )
}

export default Map;