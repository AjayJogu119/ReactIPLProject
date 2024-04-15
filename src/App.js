
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SingleTeam from './components/SingleTeam';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Venues from './components/Venues';
import Teams1 from './components/Teams1';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/teams' element = {<Teams1/>}/>
        <Route path='/teams/:TeamCode' element = {<SingleTeam/>}/>
        <Route path='/schedule' element = {<Schedule/>}/>
        <Route path='/stats' element = {<Stats/>}/>
        <Route path='/venues' element = {<Venues/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
