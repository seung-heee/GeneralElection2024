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
import BottomTextOnly from './components/BottomTextOnly';
import CampaignVideo from './components/Content/CampaignVideo';
import Manifesto from './components/Content/Manifesto';
import PledgeBook from './components/Content/PledgeBook';

function App() {
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
          <Route path='/Manifesto' element={<Manifesto />} />
          <Route path='/PledgeBook' element={<PledgeBook />} />
          <Route path='/CampaignVideo' element={<CampaignVideo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
