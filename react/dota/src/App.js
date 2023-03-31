import React, { useState,useRef } from "react";
import './App.css'
import Raspisanie from "./Raspisanie";
import Redaction from "./Redaction.js";
import { BrowserRouter,Routes,  Route,Link} from "react-router-dom";
import Main from "./Main";
const App = () => {
  return (
   <BrowserRouter>
   <Routes> 
   <Route path="/" element={<Main/>}/>
    <Route path="/Raspisanie" element={<Raspisanie/>}/>
        <Route path="/Redaction"  element={<Redaction/>}/>
        </Routes> 
     </BrowserRouter>
  )
};

export default App;