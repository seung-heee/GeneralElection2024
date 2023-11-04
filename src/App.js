import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Election from './pages/Election';
import Candidate from './pages/Candidate';
import Map from './pages/Map';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App Font_bombaram ">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Election' element={<Election />} />
          <Route path='/Candidate' element={<Candidate />} />
          <Route path='/Map' element={<Map />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
