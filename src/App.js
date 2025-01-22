import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Error404 from './components/404';

import Vision from './subcomponents/About/Vision';
import IndustryPartners from './subcomponents/About/Industry-Partners';
import Advisory from './subcomponents/About/Advisory';
import Leadership from './subcomponents/About/Leadership';

import Hydrogen from './subcomponents/Research/Hydrogen'
import Biofuels from './subcomponents/Research/Biofuels'
import Renewables from './subcomponents/Research/Renewables'
import Carbon from './subcomponents/Research/Carbon'

import AssociatedFacultyHydrogen from './subcomponents/People/Associated-Faculty/AssociatedFacultyHydrogen'
import AssociatedFacultyBiofuels from './subcomponents/People/Associated-Faculty/AssociatedFacultyBiofuels';
import AssociatedFacultyRenewables from './subcomponents/People/Associated-Faculty/AssociatedFacultyRenewables';
import AssociatedFacultyCarbonCapture from './subcomponents/People/Associated-Faculty/AssociatedFacultyCarbonCapture';

import EmeritusProfessors from './subcomponents/People/Emeritus-Professors';

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
            <Route path="/about/industry-partners" element={<IndustryPartners />} />
            <Route path="/about/advisory-committee" element={<Advisory />} />
            <Route path="/about/leadership" element={<Leadership />} />
            
            <Route path="/research/hydrogen" element={<Hydrogen />} />
            <Route path="/research/biofuels" element={<Biofuels />} />
            <Route path="/research/renewables" element={<Renewables />} />
            <Route path="/research/carbon-capture" element={<Carbon />} />


            <Route path="/people/associated-faculty/hydrogen" element={<AssociatedFacultyHydrogen />} />
            <Route path="/people/associated-faculty/biofuels" element={<AssociatedFacultyBiofuels />} />
            <Route path="/people/associated-faculty/renewables" element={<AssociatedFacultyRenewables />} />
            <Route path="/people/associated-faculty/carbon-capture" element={<AssociatedFacultyCarbonCapture />} />
            
            <Route path="/people/emeritus-professors" element={<EmeritusProfessors />} />

            <Route path="*" element={<Error404 />} />

          </Routes>
        </div>
        <Footer/>

      </div>


    </div>
  );
}

export default App;
