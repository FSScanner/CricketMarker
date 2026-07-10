export async function startCamera(){


const video =
document.getElementById("camera");


try {


const stream =
await navigator.mediaDevices.getUserMedia({

video:{

facingMode:"environment"

},

audio:false

});


video.srcObject = stream;


document.getElementById("status")
.innerHTML =
"Camera Active";


}


catch(error){


console.error(error);


document.getElementById("status")
.innerHTML =
"Camera Error: " + error.message;


}


}