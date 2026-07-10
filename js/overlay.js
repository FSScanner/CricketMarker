export function drawOverlay(){


const canvas =
document.getElementById("overlay");


const camera =
document.getElementById("camera");


// Wait for camera dimensions

canvas.width =
camera.videoWidth;


canvas.height =
camera.videoHeight;



const ctx =
canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.strokeStyle = "red";

ctx.lineWidth = 5;



// Centre vertical line

ctx.beginPath();

ctx.moveTo(
canvas.width / 2,
0
);

ctx.lineTo(
canvas.width / 2,
canvas.height
);

ctx.stroke();



// Centre circle

ctx.beginPath();

ctx.arc(

canvas.width / 2,

canvas.height / 2,

40,

0,

Math.PI * 2

);


ctx.stroke();



console.log(
"Overlay drawn",
canvas.width,
canvas.height
);


}