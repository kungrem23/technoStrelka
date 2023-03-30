import React, { useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import './App.css'
import footmg from './verst/Assets/logo.png';
import supicon from './verst/Assets/icon.png'

export default function Raspisanie() {
    fetch("").then(res=>res()).then()
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
          <pre className="FilterText">Фильтр</pre>
          <img src="Assets/icon.png" alt=""/>
        </button>
        <div className="VariantsBtn">
          <button> 
            <pre className="FilterText">ИВТ</pre>
            <img src="Assets/icon.png" alt=""/>
          </button>
          <button>
            <pre className="FilterText">Экономический</pre>
            <img src="Assets/icon.png" alt=""/>
          </button>
          <button>
            <pre className="FilterText">Бизнес-аналитика</pre>
            <img src="Assets/icon.png" alt=""/>
          </button>
        </div></div>
      <a className="FilterText" href="redakt.html">Редактировать</a>
    </div>
    <br/>

    <div className="container">

      <button className="WeekDay" /*</div>onclick="(document.getElementById('list1').style.display='block')"*/>
        <pre className="BodyText">Понедельник</pre>
        <img src="./verst/Assets/icon.png" alt=""/>
      </button>
      <div className="list1" class="BodyText" /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>

      <button className="WeekDay" /*onclick="(document.getElementById('list2').style.display='block')"*/>
        <pre className="BodyText">Вторник</pre>
        <img src="Assets/icon.png" alt=""/>
      </button>
      <div className="list2" /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>

      <button className="WeekDay" /*onClick="(document.getElementById('list3').style.display='block')"*/>
        <pre className="BodyText">Среда</pre>
        <img src="Assets/icon.png" alt=""/>
      </button>
      <div className="list3" class="BodyText" /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 Программирование 202 ИН И.И. Поляков</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">9.40-11.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">14.10-15.40 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>

      <button className="WeekDay" /*onclick="(document.getElementById('list4').style.display='block')"*/>
        <pre className="BodyText">Четверг</pre>
        <img src="Assets/icon.png" alt=""/>
      </button>
      <div className="list4"  /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 Программирование 202 ИН И.И. Поляков</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">9.40-11.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
      </div>

      <button className="WeekDay" /*onclick="(document.getElementById('list5').style.display='block')"*/>
        <pre className="BodyText">Пятница</pre>
        <img src="Assets/icon.png" alt=""/>
      </button>
      <div className="list5"  /*style="display:none;"*/>
        <div className="pairs">
          <pre className="BodyText">8.40-10.10 ИT 402 ИЦЭ И.А.Иванов</pre>
        </div>
        <div className="pairs" /*style="margin-top: 20px"*/>
          <pre className="BodyText">10.30-12.00 Мат. анализ 107 ПЭ М.С.Шитова</pre>
        </div>
      </div>

    </div>

  </main>

  <footer>
    <div className="FooterInfo">
      <img src={footmg} alt=""/>
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
