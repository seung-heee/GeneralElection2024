import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainElection from './MainElection';
import { useNavigate } from 'react-router-dom';



function MainPage() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => { navigate('/main-election') }}
        className='text-2xl w-9/12 py-3 mt-4 rounded-3xl mainbtn flex justify-center items-center'>
        <span>본선거</span>
        </button>
        <button onClick={() => { navigate('/by-election') }}
            className='text-2xl w-9/12 py-3 mt-4 rounded-3xl mainbtn flex justify-center items-center'>
            <span>보궐선거</span>
        </button>
    </div>
    );
  
}

export default MainPage;