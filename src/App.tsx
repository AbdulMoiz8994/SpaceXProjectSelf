import React from 'react';
import './App.css';
import {NextLaunchCont,LaunchesCont,LaunchesDetails} from './components/index'

function App() {
  return (
    <div className="App">
      <NextLaunchCont/>
      <LaunchesCont/>
      <LaunchesDetails/>
    </div>
  );
}

export default App;
