import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Error404 from './components/404';

import Vision from './subcomponents/About/Vision';

import Hydrogen from './subcomponents/Research/Hydrogen'
import Biofuels from './subcomponents/Research/Biofuels'
import Renewables from './subcomponents/Research/Renewables'
import Carbon from './subcomponents/Research/Carbon'


function App() {
  return (
    <div>

      <div className="container">
        
        <div className="content">
          <Navbar/>
          <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />

            <Route path="/about/vision-mission" element={<Vision />} />
            
            <Route path="/research/hydrogen" element={<Hydrogen />} />
            <Route path="/research/biofuels" element={<Biofuels />} />
            <Route path="/research/renewables" element={<Renewables />} />
            <Route path="/research/carbon-capture" element={<Carbon />} />

            
            <Route path="*" element={<Error404 />} />

          </Routes>
        </div>
        <Footer/>

      </div>


    </div>
  );
}

export default App;
