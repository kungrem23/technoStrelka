/*var mainpar = document.getElementById("onload")
fetch('http://127.0.0.1:8080/get_pares').then(res => res.json()).then(data => giveData(data) )

const giveData = (data) => {
    const all = JSON.parse(data)
    let sec = all.auditorium
console.table(sec)
let nee = data;
mainpar.textContent = nee;
neew(all)
function newfun(obj){
console.log(obj.auditorium)
}
}*/

async function populate(){
const requestURL = 'http://127.0.0.1:8080/get_pares';
const request = new Request(requestURL);

const response = await fetch(request);
const superHeroesText =  await  response.text();

const superHeroes = JSON.parse(superHeroesText);
console.log(superHeroes)
populateHeader(superHeroes);
}


function populateHeader(obj) {
const header = document.querySelector('header');
const myH1 = document.createElement('h1');
myH1.textContent = obj.auditorium;
header.appendChild(myH1);

const myPara = document.createElement('p');
myPara.textContent = ` ${obj.auditorium} //  ${obj.auditorium}`;
header.appendChild(myPara);
}


populate();