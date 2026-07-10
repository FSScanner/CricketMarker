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


import {
  calibratePitch
} from "./calibration.js";



// Camera buttons

const startButton =
document.getElementById("startCamera");


const stopButton =
document.getElementById("stopCamera");



// Sensor button

const sensorButton =
document.getElementById("enableSensors");


// Calibration button

const pitchButton =
document.getElementById("setPitch");



// Start camera

if(startButton){

startButton.addEventListener(
"click",
async ()=>{


  await startCamera();


  drawOverlay();


}

);

}



// Stop camera

if(stopButton){

stopButton.addEventListener(
"click",
stopCamera
);

}



// Enable phone sensors

if(sensorButton){

sensorButton.addEventListener(
"click",
startSensors
);

}



// Set pitch direction

if(pitchButton){

pitchButton.addEventListener(
"click",
calibratePitch
);

}



console.log(
"CricketMarker v0.4.0 loaded"
);