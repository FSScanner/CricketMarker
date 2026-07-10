let orientation = {

alpha:0,
beta:0,
gamma:0

};


export function startSensors(){


window.addEventListener(
"deviceorientation",
(event)=>{


orientation.alpha =
event.alpha || 0;


orientation.beta =
event.beta || 0;


orientation.gamma =
event.gamma || 0;



updateDisplay();


}

);


}



function updateDisplay(){


const status =
document.getElementById("status");


status.innerHTML = `

Heading:
${orientation.alpha.toFixed(1)}°

<br>

Tilt:
${orientation.beta.toFixed(1)}°

<br>

Roll:
${orientation.gamma.toFixed(1)}°

`;



}