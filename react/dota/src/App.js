import React, { useState,useRef } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import './App.css'
import footmg from './verst/Assets/logo.png';
import supicon from './verst/Assets/icon.png';
import Raspisanie from "./Raspisanie";
import Redaction from "./Redaction.js";
import { BrowserRouter , Route} from "react-router-dom";
const App = () => {
  return (
   <BrowserRouter>  
  <Raspisanie/>
  <Route  exact path="/"  component={Raspisanie}/>
        <Route path="/Redaction"  component={Redaction}/>
     </BrowserRouter>
  )
};

export default App;