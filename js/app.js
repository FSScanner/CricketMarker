import { 
startCamera,
stopCamera
} from "./camera.js";


import {
drawOverlay
} from "./overlay.js";



document
.getElementById("startCamera")
.addEventListener(
"click",
()=>{

startCamera();

drawOverlay();

}

);



document
.getElementById("stopCamera")
.addEventListener(
"click",
stopCamera
);



console.log(
"CricketMarker v0.2 loaded"
);