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


function MainElection() {


  return (
      <div className="App Font_bombaram relative">
        <div div className="leftDate absolute top-16 left-1 verticalLeft text-3xl" >2023.11.20-11.22</div>
        <div className="rightDate absolute bottom-48 right-1 verticalRight text-3xl">2023.11.20-11.22</div>
        <MainNav />
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='Election' element={<Election />} />
          <Route path='Candidate' element={<Candidate />} />
          <Route path='Map' element={<Map />} />
          <Route path='About' element={<About />} />
          <Route path='CandidateInfo' element={<CandidateInfo />} />
          <Route path='Voting' element={<Voting />} />
          <Route path='CandidateContent' element={<CandidateContent />} />
        </Routes>
      </div>
  );
}

export default MainElection;
