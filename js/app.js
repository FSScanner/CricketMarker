import { 
  startCamera,
  stopCamera
} from "./camera.js";


import {
  drawOverlay
} from "./overlay.js";


import {
  startSensors
} from "./sensors.js";



// Camera buttons

const startButton =
document.getElementById("startCamera");


const stopButton =
document.getElementById("stopCamera");



// Sensor button

const sensorButton =
document.getElementById("enableSensors");



// Start camera

startButton.addEventListener(
"click",
async ()=>{


  await startCamera();


  drawOverlay();


}

);



// Stop camera

stopButton.addEventListener(
"click",
stopCamera
);



// Enable phone sensors

if(sensorButton){

sensorButton.addEventListener(
"click",
startSensors
);

}



console.log(
"CricketMarker v0.3.1 loaded"
);