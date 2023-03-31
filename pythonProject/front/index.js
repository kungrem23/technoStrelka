var mainpar = document.getElementById("onload")
fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json').then(res => res.json()).then(data => giveData(data))
const giveData = (data) => {
mainpar.innerHTML = "";
console.table(data)
console.log(data.homeTown)
let nee = data.homeTown;
mainpar.textContent = nee;
}