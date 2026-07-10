export function drawOverlay(){


const canvas =
document.getElementById("overlay");


const ctx =
canvas.getContext("2d");


canvas.width =
canvas.clientWidth;


canvas.height =
canvas.clientHeight;



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.strokeStyle="red";

ctx.lineWidth=4;



// centre line

ctx.beginPath();

ctx.moveTo(
canvas.width/2,
0
);

ctx.lineTo(
canvas.width/2,
canvas.height
);

ctx.stroke();



ctx.beginPath();

ctx.arc(

canvas.width/2,

canvas.height/2,

25,

0,

Math.PI*2

);


ctx.stroke();


}