let markerActive = false;


import {
startVision
} from "./vision.js";



export function startMarkerTracking(){


markerActive = true;

startVision();

document.getElementById("status").innerHTML =

`
Marker Tracking Active
<br>
Searching...
`;

}



export function stopMarkerTracking(){

markerActive=false;

}



export function isMarkerActive(){

return markerActive;

}