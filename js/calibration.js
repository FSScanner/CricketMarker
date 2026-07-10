import {
saveSetting,
loadSetting
} from "./storage.js";



export function calibratePitch(){


const heading =
window.currentHeading || 0;



saveSetting(
"pitchHeading",
heading
);

window.lockedMessage = true;

document.getElementById(
"status"
).innerHTML =

`
Pitch Direction Locked
<br>
${heading.toFixed(1)}°
`;



}



export function getPitchHeading(){

return loadSetting(
"pitchHeading"
);

}