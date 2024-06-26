import logo from './logo.svg';
import './App.css';
import GuestPage from './components/DeNt/GuestPage/GuestPage';
import { ProfEditPage } from './components/DeNt/ProfEditPage/ProjEditPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VeriPage1 } from './components/DeNt/VeriPage1/VeriPage1';
import { VeriPage2 } from './components/DeNt/VeriPage2/VeriPage2';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path = "/veripage2" element = {<VeriPage2 />} />
    </Routes>
  );
}

export default App;
