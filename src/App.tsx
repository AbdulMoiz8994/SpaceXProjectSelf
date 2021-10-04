import React from 'react';
import './App.css';
import {NextLaunchCont,LaunchesCont,LaunchesDetails,EventsCont} from './components/index'

function App() {
  return (
    <div className="App">
      <NextLaunchCont/>
      <LaunchesCont/>
      <LaunchesDetails/>
      <EventsCont/>
      
    </div>
  );
}

export default App;
