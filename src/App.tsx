import React from 'react';
import './App.css';
// import {NextLaunchCont,LaunchesCont,LaunchesDetails,EventsCont,CompanyInfoCont} from './components/index'
import {Header} from './components/StyledComp/Comp/Header'

// Import the Pages of Routing
import {Home, Launches, Events,About } from './Pages/index'
import {Route, Routes} from 'react-router-dom'


//import a navigation
import {Navbar} from './components/NextLaunch/Navbar/navbar'

function App() {
  return (
    <div className="App">

      {/* checking The getting correct Api Purpose */}
      {/* <NextLaunchCont/>
      <LaunchesCont/>
      <LaunchesDetails/>
      <EventsCont/>
      <CompanyInfoCont/> */}
      {/* <Header/>  */} 
      {/* for pratice the style comp we did Comp Folder*/}



      <Navbar/>
      <div>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/launches" element={<Launches/>}/>
          <Route  path="/events" element={<Events/>}/>
          <Route  path="/about" element={<About/>}/>

        </Routes>
      </div>
        
 


    </div>
  );
}

export default App;
