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


const processCanvas =
document.getElementById("processingCanvas");


const overlay =
document.getElementById("overlay");



if(
video.videoWidth === 0 ||
video.videoHeight === 0
){

requestAnimationFrame(
processFrame
);

return;

}



processCanvas.width =
video.videoWidth;


processCanvas.height =
video.videoHeight;



overlay.width =
video.videoWidth;


overlay.height =
video.videoHeight;



const pctx =
processCanvas.getContext("2d");


pctx.drawImage(
video,
0,
0,
processCanvas.width,
processCanvas.height
);



try {


let src =
cv.imread(processCanvas);



let gray =
new cv.Mat();



cv.cvtColor(
src,
gray,
cv.COLOR_RGBA2GRAY
);



let threshold =
new cv.Mat();



cv.threshold(
gray,
threshold,
200,
255,
cv.THRESH_BINARY
);



let contours =
new cv.MatVector();



let hierarchy =
new cv.Mat();



cv.findContours(

threshold,

contours,

hierarchy,

cv.RETR_EXTERNAL,

cv.CHAIN_APPROX_SIMPLE

);



detectTarget(
contours,
overlay
);



src.delete();

gray.delete();

threshold.delete();

contours.delete();

hierarchy.delete();



}

catch(error){

console.log(
"Vision error",
error
);

}



requestAnimationFrame(
processFrame
);


}





function detectTarget(
contours,
overlay
){


const ctx =
overlay.getContext("2d");


ctx.clearRect(
0,
0,
overlay.width,
overlay.height
);



let largest = null;

let largestArea = 0;



for(
let i=0;
i<contours.size();
i++
){


let contour =
contours.get(i);


let area =
cv.contourArea(contour);



if(area > largestArea){

largestArea = area;

largest = contour;

}


}



if(
largest &&
largestArea > 500
){


let rect =
cv.boundingRect(
largest
);



ctx.strokeStyle =
"lime";


ctx.lineWidth =
5;



ctx.strokeRect(

rect.x,

rect.y,

rect.width,

rect.height

);



const centreX =
rect.x + rect.width / 2;



const centreY =
rect.y + rect.height / 2;



ctx.beginPath();


ctx.arc(

centreX,

centreY,

15,

0,

Math.PI*2

);


ctx.stroke();



updateStatus(
centreX,
overlay.width
);



}

}





function updateStatus(
targetX,
screenWidth
){


const difference =
targetX -
(screenWidth/2);



let message;


if(
Math.abs(difference)<50
){

message =
"✅ TARGET CENTRED";

}

else if(
difference>0
){

message =
"⬅ MOVE LEFT";

}

else{

message =
"➡ MOVE RIGHT";

}



document.getElementById(
"status"
).innerHTML =

`
${message}

<br>

Offset:
${Math.round(difference)}
pixels

`;

}