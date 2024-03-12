import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, ByMain } from './pages/Main';
import { Election, ByElectionPage } from './pages/Election';
import { Candidate, ByCandidate } from './pages/Candidate';
import { Map,ByMap } from './pages/Map';
import {CandidateInfo, ByCandidateInfo} from './pages/CandidateInfo';
import { Voting, ByVoting} from './pages/Voting';
import { About, ByAbout } from './pages/About';
import { MainNav, ByMainNav} from './components/MainNav';
import { CandidateContent, ByCandidateContent } from './pages/CandidateContent';
import { getCookie, setCookie } from './utils/cookie';
import { useEffect } from 'react';
import axios from 'axios';
import PledgeBook from './pages/PledgeBook';
import CampaignVideo from './pages/CampaignVideo';

function ByElection() {
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
      // callAPI();
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
      <div className="App Font_bombaram relative">
        <div div className="leftDate absolute top-16 left-1 verticalLeft text-3xl" >2024.03.25-03.27</div>
        <div className="rightDate absolute bottom-48 right-1 verticalRight text-3xl">2024.03.25-03.27</div>
        <ByMainNav />
        <Routes>
          <Route path='' element={<ByMain />} />
          <Route path='Election' element={<ByElectionPage />} />
          <Route path='Candidate' element={<ByCandidate />} />
          <Route path='Map' element={<ByMap />} />
          <Route path='About' element={<ByAbout />} />
          <Route path='CandidateInfo' element={<ByCandidateInfo />} />
          <Route path='Voting' element={<ByVoting />} />
          <Route path='CandidateContent' element={<ByCandidateContent />} />
          <Route path='PledgeBook' element={<PledgeBook />} />
          <Route path='CampaignVideo' element={<CampaignVideo />} />
        </Routes>
      </div>
  );
}

export default ByElection;
