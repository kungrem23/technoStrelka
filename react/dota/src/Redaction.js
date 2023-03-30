import React from 'react'
import Raspisanie from './Raspisanie';
function Redaction() {
  return (
    <>
    <header>
    <h1>Редактирование</h1>
  </header>

  <main>
    <div class="BlockRedakt">

      <div class="BigInput">
        <h2 class="BodyText" style="color: white;">Предварительный просмотр</h2>

        <div id="PrimerInputText">
          <pre class="BodyText" style="color: #333333; font-size: 28px; margin-bottom: 10px; padding-left: 15px">28.03.2023</pre>
          <form action="#" method="post"> 
            <p><textarea class="TextareaStyle" rows="10" cols="45" name="text" wrap="hard" placeholder="Ваше сообщение" readonly>
8.40-10.10 ИT 402 ИЦЭ И.А.Иванов
10.30-12.00 Ин.яз 107 ПЭ М.С.Шитова
            </textarea></p>
          </form>
        </div>
      </div>

      <div class="InputContainer">

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Дата" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button>
                <pre class="BodyText">13.01.23</pre>
              </button>
              <button>
                <pre class="BodyText">20.03.23</pre>
              </button>
              <button>
                <pre class="BodyText">02.05.23</pre>
              </button>
            </div>
          </div>

        </div>

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Название предмета" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button> 
                <pre class="BodyText">Ин.яз</pre>
              </button>
              <button>
                <pre class="BodyText">История</pre>
              </button>
              <button>
                <pre class="BodyText">Мат.анализ</pre>
              </button>
            </div>
          </div>

        </div>

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Аудитория" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button> 
                <pre class="BodyText">202</pre>
              </button>
              <button>
                <pre class="BodyText">310</pre>
              </button>
              <button>
                <pre class="BodyText">415</pre>
              </button>
            </div>
          </div>

        </div>

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Преподаватель" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button>
                <pre class="BodyText">А.И.Куприн</pre>
              </button>
              <button>
                <pre class="BodyText">М.А.Булгаков</pre>
              </button>
              <button>
                <pre class="BodyText">Л.Н.Толстой</pre>
              </button>
            </div>
          </div>

        </div>

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Группа" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button> 
                <pre class="BodyText">ИН</pre>
              </button>
              <button>
                <pre class="BodyText">ИЦЭ</pre>
              </button>
              <button>
                <pre class="BodyText">ПЭ</pre>
              </button>
            </div>
          </div>

        </div>

        <div class="InputInfo">
          <input id="SearchInput" placeholder="Время" type="search"/>

          <div class="FAQ">
            <button id="SearchBtn" src="Assets/icon.png">
              <img style="margin-top: -5px; margin-left: -13px" src="Assets/iconWhite.png" alt=""/>
            </button>
            <div class="VariantsBtn">
              <button> 
                <pre class="BodyText">8.40-10.10</pre>
              </button>
              <button>
                <pre class="BodyText">10.10-11.40</pre>
              </button>
              <button>
                <pre class="BodyText">12.20-13.50</pre>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="DownBtn">
      <button style="padding: 5px 70px">
        <pre id="DownBtnText">Сохранить</pre>
        <pre id="DownBtnText">изменения</pre>
      </button>
      <a href="index.html">
        <pre id="DownBtnText">Перейти на</pre>
        <pre id="DownBtnText">главную страницу</pre>
      </a>
    </div>

  </main>

  <footer>
    <div id="FooterInfo">
      <img src="Assets/logo.png" alt=""/>
      <div id="FooterText">
        <h1 id="FooterText">О команде</h1>
        <pre id="FooterText" style="font-size: 16px">Дарья – верстальщик
Софья – дизайнер
Данил – backend программист
Роман – frontend программист</pre>
      </div>
      <h2 id="FooterText">До встречи в Нижнем!</h2>
    </div>
  </footer>
  </>
  )
}
