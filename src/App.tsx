import React from 'react';
import './App.css';
import {NextLaunchCont,LaunchesCont,LaunchesDetails,EventsCont,CompanyInfoCont} from './components/index'

function App() {
  return (
    <div className="App">
      <NextLaunchCont/>
      <LaunchesCont/>
      <LaunchesDetails/>
      <EventsCont/>
         <CompanyInfoCont/>
    </div>
  );
}

export default App;
