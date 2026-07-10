let processing = false;


export function startVision(){


if(processing){

return;

}


processing = true;


console.log(
"Vision engine started"
);


processFrame();


}



function processFrame(){


if(!processing){

return;

}


const video =
document.getElementById("camera");


const canvas =
document.getElementById("overlay");


const ctx =
canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.beginPath();

ctx.strokeStyle = "lime";

ctx.lineWidth = 5;


ctx.arc(

canvas.width / 2,

canvas.height / 2,

50,

0,

Math.PI * 2

);


ctx.stroke();



requestAnimationFrame(
processFrame
);


}