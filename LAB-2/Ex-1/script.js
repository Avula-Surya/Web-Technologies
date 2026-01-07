const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Common vertical alignment
const topY = 60;
const centerY = 80;
const lineY = 180;

// 1️⃣ Filled Rectangle (Left)
ctx.fillStyle = "blue";
ctx.fillRect(80, topY, 120, 80);

// 2️⃣ Filled Circle (Center)
ctx.beginPath();
ctx.arc(250, centerY, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

// 3️⃣ Straight Line (Centered & Even)
ctx.beginPath();
ctx.moveTo(80, lineY);
ctx.lineTo(420, lineY);
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.stroke();

// 4️⃣ Text (Centered)
ctx.font = "24px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("HTML5 Canvas", 250, 250);
