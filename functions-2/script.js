const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

function drawRect(){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRect();

// Don't edit the code below here!

const section = document.querySelector('section');