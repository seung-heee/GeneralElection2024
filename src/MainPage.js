import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainElection from './MainElection';
import { useNavigate } from 'react-router-dom';



function MainPage() {
    const navigate = useNavigate();

    return (
        <>
        <div className='App min-h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col text-center justify-center items-center Font_bombaram'>
                <p className='text-xl  focus-in-expand mb-2'>2024</p>
                <p className='text-3xl mb-1 focus-in-expand'>학생자치기구의 새로운 도약</p>
        </div>
        <div className='Font_bombaram flex w-[375px] h-[60vh]'>
            <button 
                style={{ boxShadow: '11px 10px 7px -4px rgba(0, 0, 0, 0.13)' }}
                className='h-1/2 text-3xl m-5 bg-[#eee] w-1/2 rounded-2xl'
                onClick={() => { navigate('/main-election') }}>총선거</button>
            <button 
                style={{ boxShadow: '11px 10px 7px -4px rgba(0, 0, 0, 0.13)' }}
                className='h-1/2 text-3xl m-5 bg-[#eee] w-1/2 rounded-2xl'
                onClick={() => { navigate('/by-election') }}>보궐선거</button>
        </div>
        
    <div className="bottomText fixed text-center left-0 right-0 bottom-1 Font_bombaram">제40대선거관리위원회</div>
    </div>
    </>
    );
  
}

export default MainPage;