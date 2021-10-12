import React from 'react';
import './App.css';
import {NextLaunchCont,LaunchesCont,LaunchesDetails,EventsCont,CompanyInfoCont} from './components/index'

// Import the Pages of Routing
import {Home, Launches, Events,Rockets,About } from './Pages/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <NextLaunchCont/>
      <LaunchesCont/>
      <LaunchesDetails/>
      <EventsCont/>
      <CompanyInfoCont/> */}
      <div>
        <Router>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/launches" element={<Launches/>}/>
          <Route  path="/events" element={<Events/>}/>
          <Route  path="/rockets" element={<Rockets/>}/>
          <Route  path="/about" element={<About/>}/>

        </Router>
      </div>
    </div>
  );
}

export default App;
