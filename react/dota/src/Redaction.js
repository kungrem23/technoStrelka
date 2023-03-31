import React from 'react'
import Raspisanie from './Raspisanie';
import { BrowserRouter,Routes,  Route, Link} from "react-router-dom";
import './Redaction.css'
import iconWhite from './verst/Assets/iconWhite.png';
import logo from './verst/Assets/logo.png'
import icon from './verst/Assets/icon.png'
 export default function Redaction() {
  return (
    <>
 <header>
    <h1>Редактирование</h1>
  </header>

  <main>
    <div className="BlockRedakt">

      <div className="BigInput">
        <h2 className="BodyText" >Предварительный просмотр</h2>

        <div className="PrimerInputText">
          <pre className="BodyText" /*</div>style="color: #333333; font-size: 28px; margin-bottom: 10px; padding-left: 15px"*/>28.03.2023</pre>
          <form action="#" method="post">
            <p><textarea className="TextareaStyle" rows="10" cols="45" name="text" wrap="hard" placeholder="Ваше сообщение" readOnly >8.40-10.10 ИT 402 ИЦЭ И.А.Иванов
10.30-12.00 Ин.яз 107 ПЭ М.С.Шитова
            </textarea></p>
            <p><input type="submit" value="Отправить"/></p>
          </form>
        </div>
      </div>

      <div className="InputContainer">

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Дата" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={icon}>
              <img  src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button>
                <pre className="BodyText">13.01.23</pre>
              </button>
              <button>
                <pre className="BodyText">20.03.23</pre>
              </button>
              <button>
                <pre className="BodyText">02.05.23</pre>
              </button>
            </div>
          </div>

        </div>

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Название предмета" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={icon}>
              <img  src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button> 
                <pre className="BodyText">Ин.яз</pre>
              </button>
              <button>
                <pre className="BodyText">История</pre>
              </button>
              <button>
                <pre className="BodyText">Мат.анализ</pre>
              </button>
            </div>
          </div>

        </div>

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Аудитория" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={icon}>
              <img  src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button>
                <pre className="BodyText">202</pre>
              </button>
              <button>
                <pre className="BodyText">310</pre>
              </button>
              <button>
                <pre className="BodyText">415</pre>
              </button>
            </div>
          </div>

        </div>

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Преподаватель" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={icon}>
              <img  src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button> 
                <pre className="BodyText">А.И.Куприн</pre>
              </button>
              <button>
                <pre className="BodyText">М.А.Булгаков</pre>
              </button>
              <button>
                <pre className="BodyText">Л.Н.Толстой</pre>
              </button>
            </div>
          </div>

        </div>

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Группа" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={icon}>
              <img  src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button> 
                <pre className="BodyText">ИН</pre>
              </button>
              <button>
                <pre className="BodyText">ИЦЭ</pre>
              </button>
              <button>
                <pre className="BodyText">ПЭ</pre>
              </button>
            </div>
          </div>

        </div>

        <div className="InputInfo">
          <input className="SearchInput" placeholder="Время" type="search"/>

          <div className="FAQ">
            <button className="SearchBtn" src={iconWhite}>
              <img src={iconWhite} alt=""/>
            </button>
            <div className="VariantsBtn">
              <button> 
                <pre className="BodyText">8.40-10.10</pre>
              </button>
              <button>
                <pre className="BodyText">10.10-11.40</pre>
              </button>
              <button>
                <pre className="BodyText">12.20-13.50</pre>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>

  
    <div className="DownBtn">
      <button>
        <pre className="DownBtnText">Сохранить</pre>
        <pre className="DownBtnText">изменения</pre>
      </button>
      <Link to="/">
        <pre className="DownBtnText">Перейти на</pre>
        <pre className="DownBtnText">главную страницу</pre>
      </Link>
    </div>

  </main>

  <footer>
    <div className="FooterInfo">
      <img src={logo} alt=""/>
      <div className="FooterText">
        <pre className="FooterTextp" >О команде <br/>
          Дарья – верстальщик<br/>
Софья – дизайнер<br/>
Данил – backend программист<br/>
Роман – frontend программист</pre>
      </div>
      <h2 className="FooterText">До встречи в Нижнем!</h2>
    </div>
  </footer>
  </>
  )
}
