let stream = null;


export async function startCamera(){


const video =
document.getElementById("camera");


try {


stream =
await navigator.mediaDevices.getUserMedia({

video:{

facingMode:{
ideal:"environment"
},

width:{
ideal:1920
},

height:{
ideal:1080
}

},

audio:false

});



video.srcObject = stream;


document.getElementById(
"camera-message"
).style.display="none";


document.getElementById(
"status"
).innerHTML=
"Camera Active";


}

catch(error){


console.error(error);


document.getElementById(
"status"
).innerHTML=
"Camera Error: "
+
error.message;


}


}



export function stopCamera(){


if(stream){


stream.getTracks().forEach(
track=>track.stop()
);


stream=null;


document.getElementById(
"status"
).innerHTML=
"Camera Stopped";


}


}