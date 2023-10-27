
"use strict";

window.onload = init;

function init() {
    const button = document.getElementById("button");
    button.onclick = onButtonClicked;
}


function onButtonClicked() {

    // input
    const inputPickup = document.getElementById("inputPickup");
    const inputDays = document.getElementById("inputDays");


    // checks
    const tollCheckChecked = document.getElementById("tollCheck").checked;
    const gpsCheckChecked = document.getElementById("gpsCheck").checked;
    const roadsideCheckChecked = document.getElementById("roadsideCheck").checked;


    // radio
    const noRadioChecked = document.getElementById("noRadio").checked;
    const yesRadioChecked = document.getElementById("yesRadio").checked;


    // output
    const carRental = document.getElementById("carRental").value;
    const options = document.getElementById("options").value;
    const surcharge = document.getElementById("surcharge").value;




}
