import React, { useEffect, useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import './App.css'
import iconWhite from './verst/Assets/iconWhite.png';
import logo from './verst/Assets/logo.png'
import icon from './verst/Assets/icon.png'
import axios from 'axios';
import Redaction from './Redaction'
import { Link } from "react-router-dom";
import { BrowserRouter,Routes,  Route} from "react-router-dom";
export default function Raspisanie() {
   // const [get,Setget] = useState({ data: [] })
   // const fetchBack = async () => {
        // Ajax call to API using Axios
       // const result = await axios.get(`${Den}?q=`);
        // Books result
       // Setget(result.data);
    //}
      const [sup,setSup] = useState("")
      const [supers,setSuper] = useState("")
      const [supm,setM] = useState("")
      const [supt,setT] = useState("")
      const [supl,setL] = useState("")
      const [sups,setS] = useState("")
      const sta = () =>{
setSup(<div className="list1" class="BodyText" /*style="display:none;"*/>
<div className="pairs">
  <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
</div>
<div className="pairs" /*style="margin-top: 20px"*/>
  <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
</div>
</div>)
      }
      const stb = () =>{
        setSuper(<div className="list2" >
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>)
      }
      const stc = () =>{
        setM(<div className="list3" class="BodyText" /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 Программирование 202 ИН И.И. Поляков</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">9.40-11.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">14.10-15.40 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>)
      }
      const std = () =>{
        setT( <div className="list4"  /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 Программирование 202 ИН И.И. Поляков</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">9.40-11.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
      </div>)
      }
      const ste = () =>{
        setL( <div className="list5"  /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>)
      }
      const [filt,setFilt] = useState("Фильтер")
      const setIV = ()=>{
       setFilt("ИВТ")
      }
      const setEK = ()=>{
        setFilt("Экономика")
       }
       const setBus = ()=>{
        setFilt("Бизнесс")
       }
  return (
    <>
    <div className="App">
    <header>
    <img src="./header.png" alt=""/>
  </header>

  <main>
    <div className="HeaderBtn">
      <div className="filter">
        <button className="FilterBtn">
          <pre className="FilterText" >{filt}</pre>
          <img src={icon} alt=""/>
        </button>
        <div className="VariantsBtn">
          <button onClick={setIV}> 
            <pre className="FilterText">ИВТ</pre>
            <img src={icon} alt=""/>
          </button>
          <button onClick={setEK}>
            <pre className="FilterText" >Экономический</pre>
            <img src={icon} alt=""/>
          </button>
          <button onClick={setBus}>
            <pre className="FilterText">Бизнес-аналитика</pre>
            <img src={icon} alt=""/>
          </button>
        </div></div>
        <Link to='/Redaction'>Редактировать</Link>
    </div>
    <br/>

    <div className="container">

      <button className="WeekDay" onClick={sta}>
        <pre className="BodyText">Понедельник</pre>
        <img src={icon} alt=""/>
      </button>
      <div>{sup}</div>

      <button className="WeekDay" onClick={stb}>
        <pre className="BodyText">Вторник</pre>
        <img src={icon} alt=""/>
      </button>
      <div>{supers}</div>

      <button className="WeekDay" onClick={stc}>
        <pre className="BodyText">Среда</pre>
        <img src={icon}alt=""/>
      </button>
      <div>{supm}</div>

      <button className="WeekDay" onClick={std}>
        <pre className="BodyText">Четверг</pre>
        <img src={icon} alt=""/>
      </button>
     <div>{supt}</div>

      <button className="WeekDay"onClick={ste}>
        <pre className="BodyText">Пятница</pre>
        <img src={icon} alt=""/>
      </button>

    <div>{supl}</div>
</div>
  </main>

  <footer>
    <div className="FooterInfo">
      <img src={logo} alt=""/>
      <div className="FooterText">
        <p className="FooterText" >
          О команде<br/>
          Дарья – верстальщик<br/>
Софья – дизайнер<br/>
Данил – backend программист<br/>
Роман – frontend программист</p>
      </div>
      <p className="FooterText">До встречи в Нижнем!</p>
    </div>
  </footer>
    </div>
    </>
  );
}
