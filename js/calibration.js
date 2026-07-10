let referenceHeading = null;


export function calibrate(){


referenceHeading =
window.currentHeading;



document.getElementById(
"status"
).innerHTML =

"Pitch Line Locked";


}



export function getCalibration(){

return referenceHeading;

}