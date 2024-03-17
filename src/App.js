import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MainElection from './MainElection';
import ByElection from './ByElection';
import MainPage from './MainPage';
import { getCookie, setCookie } from './utils/cookie';
import { useEffect } from 'react';
import axios from 'axios';


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
    axios.get('https://api.sku-sku.com/visitors/vote2024/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      })
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/main-election/*' element={<MainElection />} />
          <Route path='/by-election/*' element={<ByElection />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
