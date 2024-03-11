import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MainElection from './MainElection';
import MainPage from './MainPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/main-election/*' element={<MainElection />} />
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
