import React from 'react'
import './main.css'
import logo from './verst/Assets/logo.png'
import icon from './verst/Assets/icon.png'
import { Link } from 'react-router-dom'
export default function Main() {
  return (
   <>



  <div classname="Frame">
      <br/>
      <h1 className='chooserole'>Выберите роль</h1>
      <div className="line"></div>
      <br/>
      <br/>
      <br/>
      <Link to='/Redaction' className='metodist'>Методист</Link>
      <br/>
      <Link to='/Raspisanie' className='guesta'>Гость</Link>
      <br/>
      <br/>
      <br/>
  </div>



<footer>
  <div className="FooterInfo">
    <img src={logo}alt=""/>
    <div>
      <pre className="FooterText" >
        О команде <br/>
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
