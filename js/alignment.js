import {
getPitchHeading
} from "./calibration.js";



export function checkAlignment(currentHeading){


const target =
getPitchHeading();



if(target === null){

return;

}



let difference =
currentHeading - target;



if(difference > 180){

difference -= 360;

}


if(difference < -180){

difference += 360;

}



let message;



if(Math.abs(difference)<2){

message =
"✅ CENTRE LINE LOCKED";

}

else if(difference > 0){

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

Deviation:
${difference.toFixed(1)}°

`;



}