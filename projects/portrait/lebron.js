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
ctx.arc(350, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(600, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();