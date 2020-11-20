import React from 'react'
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter,Router,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        {/* Navbar or Sidebar(For small screens) */}
        <Navbar/>
        {/* Login Screen , Signup */ }
        {/* Ask New Qn */}
        {/* Live Feed with lists of qns */}
        {/* Footer */}
    </div>
  );
}

export default App;
