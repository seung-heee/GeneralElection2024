import { useNavigate } from 'react-router-dom';
import '../App.css';
import { GiClick } from 'react-icons/gi';

const Main = () => {
    const navigate = useNavigate();
    const ChangeBtn = new Date('November 20, 2023 00:00:00');
    console.log(ChangeBtn);
    const today = new Date();
    console.log(today);

    console.log(ChangeBtn > today)

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
                {ChangeBtn > today ?
                    <>
                        <button onClick={() => { navigate('/Candidate') }}
                            className='text-2xl w-9/12 py-3 mt-4 rounded-3xl mainbtn flex justify-center items-center'>
                            <span>입후보자 바로보기</span>
                            <GiClick className='ml-2' />
                        </button>

                    </> :
                    <>
                        <button onClick={() => { navigate('/Voting') }}
                            className='text-2xl w-9/12 py-3 mt-4 rounded-3xl mainbtn flex justify-center items-center'>
                            <span>투표율 바로보기</span>
                            <GiClick className='ml-2' />
                        </button>
                    </>}
            </div>
            <div className="bottomText fixed text-center left-0 right-0 bottom-1">제40대선거관리위원회</div>
        </div>
    )
}
export default Main;