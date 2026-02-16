const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); 

// Draw a square
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, 1000, 1000);

// Draw neck
ctx.fillStyle = "tan";
ctx.fillRect(400, 750, 150, 250);

//Draw the head
ctx.beginPath();
ctx.arc(475, 400, 400, 0, Math.PI * 2);
ctx.fillStyle = "tan";
ctx.fill();
ctx.closePath();

// Draw the eyes
ctx.beginPath();
ctx.arc(350, 300, 60, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(600, 300, 60, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

// Draw the black part of the eyes
ctx.beginPath();
ctx.arc(350, 300, 30, 0, Math.PI * 2);
ctx.fillStyle = "rgb(101, 67, 33)";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(600, 300, 30, 0, Math.PI * 2);
ctx.fillStyle = "rgb(101, 67, 33)";
ctx.fill();
ctx.closePath();

// Draw the pupils
ctx.beginPath();
ctx.arc(350, 300, 15, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(600, 300, 15, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

// Draw the nose
ctx.beginPath();
ctx.moveTo(475, 350);
ctx.lineTo(450, 450);
ctx.lineTo(500, 450);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
