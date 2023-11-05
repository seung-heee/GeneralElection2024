import '../App.css';
import BottomTextOnly from '../components/BottomTextOnly';

const Main = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col text-center justify-center items-center'>
                <p className='text-xl  focus-in-expand'>2024</p>
                <p className='text-5xl Maintitle text-center my-10'>총선거</p>
                <p className='text-2xl mb-3 focus-in-expand'>학생자치기구의 새로운 도약</p>
                <div className='Font_gmarket'>
                    <p>2023.11.20-11.22</p>
                    <p>학생회관 4층 체육관</p>
                </div>
            </div>
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div>
    )
}
export default Main;