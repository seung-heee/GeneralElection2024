import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainElection from './MainElection';
import { useNavigate } from 'react-router-dom';



function MainPage() {
    const navigate = useNavigate(); 
    const style = '-webkit-box-shadow: 11px 10px 7px -4px rgba(0, 0, 0, 0.13);'
  return (
    <div className='Font_bombaram flex h-screen w-[375px] items-center'>
        <button 
            style={{ boxShadow: '11px 10px 7px -4px rgba(0, 0, 0, 0.13)' }}
            className='h-1/2 text-3xl m-5 bg-[#eee] w-1/2 rounded-2xl'
            onClick={() => { navigate('/main-election') }}>총선거</button>
        <button 
            style={{ boxShadow: '11px 10px 7px -4px rgba(0, 0, 0, 0.13)' }}
            className='h-1/2 text-3xl m-5 bg-[#eee] w-1/2 rounded-2xl'
            onClick={() => { navigate('/by-election') }}>보궐선거</button>
    </div>
    );
  
}

export default MainPage;