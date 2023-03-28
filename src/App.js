
import './App.css';
import Navbar from './Components/Navbar';
import TechnicalProjectManagment from './Components/TechnicalProjectManagement';
import React, { useState } from "react";
import {ProSidebarProvider} from "react-pro-sidebar"

function App() {
  return (
    <div>
      <Navbar/>
      <TechnicalProjectManagment/>
    </div>
  )
}

export default App
