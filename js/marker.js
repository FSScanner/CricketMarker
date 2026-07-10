let markerActive = false;


export function startMarkerTracking(){


markerActive = true;


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