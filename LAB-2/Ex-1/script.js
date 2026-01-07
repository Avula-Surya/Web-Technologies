const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Common values
const shapeSize = 80;
const topY = 60;
const margin = 60;

// 1️⃣ Rectangle (LEFT)
ctx.fillStyle = "blue";
ctx.fillRect(
    margin,
    topY,
    shapeSize,
    shapeSize
);

// 2️⃣ Circle (RIGHT) — same size as rectangle
ctx.beginPath();
ctx.arc(
    canvas.width - margin - shapeSize / 2,
    topY + shapeSize / 2,
    shapeSize / 2,
    0,
    2 * Math.PI
);
ctx.fillStyle = "red";
ctx.fill();

// 3️⃣ Straight Line (Centered & Even)
ctx.beginPath();
ctx.moveTo(margin, 180);
ctx.lineTo(canvas.width - margin, 180);
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.stroke();

// 4️⃣ Centered Text
ctx.font = "24px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("HTML5 Canvas", canvas.width / 2, 250);
