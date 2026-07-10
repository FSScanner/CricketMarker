import {
startVision
} from "./vision.js";


let markerActive = false;



export function startMarkerTracking(){


markerActive = true;


startVision();


document.getElementById(
"status"
).innerHTML =

`
Marker Tracking Active
<br>
Searching...
`;



}



export function stopMarkerTracking(){

markerActive=false;

}