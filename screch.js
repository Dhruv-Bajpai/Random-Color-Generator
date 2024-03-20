alert('click on an button')

var l = document.getElementById('h')
var a=document.querySelector('body')
var k =document.getElementById('k');
var math = Math.random() * 10
var d = (parseInt(math))
document.querySelector('.red').onclick = function dhruv(){
  a.style.backgroundColor='red';
  l.innerText='red';
}

document.querySelector('.violet').onclick = function dhruv() {
  a.style.backgroundColor = 'violet';
  l.innerText = 'violet';
}

document.querySelector('.purple').onclick = function dhruv() {
  a.style.backgroundColor = 'purple';
  l.innerText = 'purple';
}

document.querySelector('.brown').onclick = function dhruv() {
  a.style.backgroundColor = 'brown';
  l.innerText = 'brown';
  k.style.color='white';
}

document.querySelector('.black').onclick = function dhruv() {
  a.style.backgroundColor = 'black';
  l.innerText = 'black';
  k.style.color='white';
}

document.querySelector('.orange').onclick = function dhruv() {
  a.style.backgroundColor = 'orange';
  l.innerText = 'Orange';
}

document.querySelector('.yellow').onclick = function dhruv() {
  a.style.backgroundColor = 'yellow';
  l.innerText = 'yellow';
}

document.querySelector('.white').onclick = function dhruv() {
  a.style.backgroundColor = 'white';
  l.innerText = 'white';
  k.style.color='black';
}

document.querySelector('.pink').onclick = function dhruv() {
  a.style.backgroundColor = 'Pink';
  l.innerText = 'Pink';
}

document.querySelector('.Gray').onclick = function dhruv(){
  a.style.backgroundColor = 'Gray';
  l.innerText = 'Gray';
}

document.querySelector('.green').onclick = function dhruv() {
  a.style.backgroundColor = 'lightGreen';
  l.innerText='green';
}


document.querySelector('.blue').onclick = function dhruv() {
  a.style.backgroundColor = 'blue';
  l.innerText='blue';
}

function mohit() {
  return Math.floor(Math.random() * 256); // Generate random number between 0 and 255
}

document.querySelector('.r').onclick = function dhruv() {
  var red = mohit();
  var green = mohit();
  var blue = mohit();
  var color = `rgb(${red}, ${green}, ${blue})`; // Construct the RGB color string
  document.querySelector('body').style.backgroundColor = color;
  l.innerText='Welcome Again!😊';
}
