
var a=document.querySelector('body')
var math = Math.random() * 10
var d = (parseInt(math))
document.querySelector('.red').onclick = function dhruv(){
  a.style.backgroundColor='red';
}


document.querySelector('.green').onclick = function dhruv() {
  a.style.backgroundColor = 'lightGreen';
}


document.querySelector('.blue').onclick = function dhruv() {
  a.style.backgroundColor = 'blue';
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
}
