import { 
startCamera,
stopCamera
} from "./camera.js";


import {
drawOverlay
} from "./overlay.js";



const startButton =
document.getElementById("startCamera");


const stopButton =
document.getElementById("stopCamera");



startButton.addEventListener(
"click",
async ()=>{


await startCamera();


drawOverlay();


}

);



stopButton.addEventListener(
"click",
stopCamera
);



import {
startSensors
} from "./sensors.js";



startSensors();



console.log(
"CricketMarker v0.3 loaded"
);