import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Election from './pages/Election';
import Candidate from './pages/Candidate';
import Map from './pages/Map';
import About from './pages/About';
import CandidateInfo from './pages/CandidateInfo';
import Voting from './pages/Voting';
import MainNav from './components/MainNav';
import CandidateContent from './pages/CandidateContent';
import { getCookie, setCookie } from './utils/cookie';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cookie = getCookie('visitor');
    if (!cookie) {
      const currentDate = new Date();
      const expiresDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1, // 다음 날로 설정
        0, // 시간을 00시로 설정
        0, // 분을 00분으로 설정
        0, // 초를 00초로 설정
      );
      // 시차 보정
      setCookie('visitor', 'visitor', { path: './', expires: expiresDate, secure: true });
      callAPI();
    }
  }, []);

  const callAPI = () => {
    axios.get('https://api.sku-sku.com/vote2024/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      })
  }

  return (
    <BrowserRouter>
      <div className="App Font_bombaram relative">
        <div div className="leftDate absolute top-16 left-1 verticalLeft text-3xl" >2023.11.20-11.22</div>
        <div className="rightDate absolute bottom-48 right-1 verticalRight text-3xl">2023.11.20-11.22</div>
        <MainNav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Election' element={<Election />} />
          <Route path='/Candidate' element={<Candidate />} />
          <Route path='/Map' element={<Map />} />
          <Route path='/About' element={<About />} />
          <Route path='/CandidateInfo' element={<CandidateInfo />} />
          <Route path='/Voting' element={<Voting />} />
          <Route path='/CandidateContent' element={<CandidateContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
