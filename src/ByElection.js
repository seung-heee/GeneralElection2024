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
import PledgeBook from './pages/PledgeBook';
import CampaignVideo from './pages/CampaignVideo';
import Manifesto from './pages/Manifesto';
import YearPlan from './pages/YearPlan';

function ByElection() {

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
          <Route path='Manifesto' element={<Manifesto />} />
          <Route path='YearPlan' element={<YearPlan />} />
        </Routes>
      </div>
  );
}

export default ByElection;
