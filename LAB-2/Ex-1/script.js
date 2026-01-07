const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Make sure canvas has size (important)
canvas.width = 600;
canvas.height = 300;

// Bigger Rectangle (left)
ctx.fillStyle = "blue";
ctx.fillRect(50, 60, 120, 120);

// Bigger Circle (right)
ctx.beginPath();
ctx.arc(450, 120, 60, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

// Line (middle)
ctx.beginPath();
ctx.moveTo(40, 200);
ctx.lineTo(560, 200);
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.stroke();

// Text (visible & centered)
ctx.font = "24px Arial";
ctx.fillStyle = "purple";
ctx.textAlign = "center";
ctx.fillText("HTML5 Canvas", canvas.width / 2, 260);
