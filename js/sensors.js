window.lockedMessage = false;

let orientation = {
  alpha: 0,
  beta: 0,
  gamma: 0
};


export async function startSensors(){

  try {


    if(
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ){

      const permission =
      await DeviceOrientationEvent.requestPermission();


      if(permission !== "granted"){

        throw new Error(
          "Sensor permission denied"
        );

      }

    }



    window.addEventListener(
      "deviceorientation",
      (event)=>{


        orientation.alpha =
        event.alpha ?? 0;


        orientation.beta =
        event.beta ?? 0;


        orientation.gamma =
        event.gamma ?? 0;


        window.currentHeading =
        orientation.alpha;


        updateDisplay();


      }
    );



    updateDisplay();

  }

  catch(error){


    console.error(error);


    document.getElementById("status").innerHTML =
    "Sensor Error: " + error.message;


  }


}



function updateDisplay(){

if(window.lockedMessage){

return;

}


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