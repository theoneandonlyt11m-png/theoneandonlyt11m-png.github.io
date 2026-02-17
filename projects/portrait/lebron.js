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
ctx.outlineWidth = 5;
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

// Draw the mouth
ctx.beginPath();
ctx.arc(475, 600, 120, 0, Math.PI * 1);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

// Draw the eyebrows
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(400, 250);
ctx.lineWidth = 15;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(550, 250);
ctx.lineTo(650, 200);
ctx.lineWidth = 15;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

// Draw the ears
ctx.fillStyle = "tan";
ctx.beginPath();
ctx.ellipse(55,375,50,110,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle = "tan";
ctx.beginPath();
ctx.ellipse(895,375,50,110,0,0,Math.PI * 2);
ctx.fill();

// Draw the teeth
//1st tooth
ctx.fillStyle = "white";
ctx.fillRect(380, 600, 30, 20);
//2nd tooth
ctx.fillStyle = "white";
ctx.fillRect(420, 600, 30, 20);
//3rd tooth
ctx.fillStyle = "white";
ctx.fillRect(460, 600, 30, 20);
//4th tooth
ctx.fillStyle = "white";
ctx.fillRect(500, 600, 30, 20);
//5th tooth
ctx.fillStyle = "white";
ctx.fillRect(540, 600, 30, 20); 

// Draw the hair

ctx.beginPath();
ctx.moveTo(190, 110);
ctx.lineTo(190, 250);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(220, 90);
ctx.lineTo(220, 260);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath(); 


ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(250, 60);
ctx.lineTo(250, 230);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(280, 40);
ctx.lineTo(280, 250);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(310, 30);
ctx.lineTo(310, 190);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(340, 20);
ctx.lineTo(340, 200);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(370, 10);
ctx.lineTo(370, 220);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(400, 5);
ctx.lineTo(400, 210);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(430, 0);
ctx.lineTo(430, 230);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(460, 0);
ctx.lineTo(460, 240);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(490, 0);
ctx.lineTo(490, 220);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "rgb(101, 67, 33)";
ctx.beginPath();
ctx.moveTo(520, 3);
ctx.lineTo(520, 230);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(550, 5);
ctx.lineTo(550, 250);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(580, 10);
ctx.lineTo(580, 220);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(610, 20);
ctx.lineTo(610, 200);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(640, 30);
ctx.lineTo(640, 190);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(670, 40);
ctx.lineTo(670, 200);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(700, 70);
ctx.lineTo(700, 220);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(730, 90);
ctx.lineTo(730, 250);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(760, 120);
ctx.lineTo(760, 240);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(790, 150);
ctx.lineTo(790, 250);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgb(101, 67, 33)";
ctx.stroke();
ctx.closePath();


