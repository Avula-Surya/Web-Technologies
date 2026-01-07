// Get canvas and context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 1. Draw filled rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 120, 80);

// 2. Draw filled circle
ctx.beginPath();
ctx.arc(250, 80, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

// 3. Draw straight line
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(450, 200);
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.stroke();

// 4. Draw text
ctx.font = "24px Arial";
ctx.fillStyle = "black";
ctx.fillText("HTML5 Canvas", 160, 260);
