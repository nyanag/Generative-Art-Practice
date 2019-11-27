var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 2;
context.strokeStyle = 'rgb('+Math.random()*200+','+Math.random()*100+','+Math.random()*100+')'

var finalSize = 3;
var startSteps;
var offset = 2;
var tileStep = (size - offset * 2) / 7;
var startSize = tileStep;
var directions = [-1, 0, 1];

function draw(x, y, width, height, xMovement, yMovement, steps) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.stroke();
    
  if(steps >= 0) {
    var newSize = (startSize) * (steps / startSteps) + finalSize;
    var newX = x + (width - newSize) / 2
    var newY = y + (height - newSize) / 2
    newX = newX - ((x - newX) / (steps + 2)) * xMovement
    newY = newY - ((y - newY) / (steps + 2)) * yMovement
    draw(newX, newY, newSize, newSize, 0, 1, steps - 1);
  }
}

for( var x = offset; x < size - offset; x += tileStep) {
  for( var y = offset; y < size - offset; y += tileStep) {
    startSteps = 2 + Math.ceil(Math.random() * 3)
    var xDirection = directions[Math.floor(Math.random() * directions.length)]
    var yDirection = directions[Math.floor(Math.random() * directions.length)]
    draw(x, y, startSize, startSize, 1, -1, startSteps - 1);
  }
}

function Pagereload(){
    setTimeout('location.reload(true)', 3000);
}
Pagereload();