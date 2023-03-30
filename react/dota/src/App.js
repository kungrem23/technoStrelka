import React, { useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import './App.css'
import footmg from './verst/Assets/logo.png';
import supicon from './verst/Assets/icon.png';
import Raspisanie from "./Raspisanie";
import Redaction from "./Redaction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const App = () => {

  return (
    <>
   <Router>
      <div className="App">
        <Route path="/" exact component={Raspisanie}/>
        <Route path="/second" exact component={Redaction}/>
     </div>
     </Router>
    </>
  )
};

export default App;