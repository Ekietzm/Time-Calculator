/* Time Calculator is a simple application that allows you to add
or subtract two values of time easily.*/

let time1_hours; //User input time 1 hours
let time1_minutes; //User input time 1 minutes
let time1_seconds; //User input time 1 seconds
let time1_total; // time1 hours + mins + sec
let time2_hours; //User input time 2 hours
let time2_minutes; //User input time 2 minutes
let time2_seconds; //User input time 2 seconds
let time2_total; // time2 hours + mins + sec
let addition = 0; // Checks whether the numbers have been added or not.

//Setting variable to 1 should tell the program that addition is being used
document.getElementById("add").onclick = function(){
    addition = 1;
}
//Setting variable to 2 should tell the program that subtraction is being used
document.getElementById("subtract").onclick = function(){
    addition = 2;
}

function calculateTime(){
    //converts time1 into seconds
    time1_hours = document.getElementById("hours1").value * 60 *60;
    time1_minutes = document.getElementById("minutes1").value * 60;
    time1_seconds = document.getElementById("seconds1").value;

     // If seconds input is empty, default to 0
     if (time1_seconds === "") {
        time1_seconds = 0;
    } else {
        time1_seconds = parseInt(time1_seconds);
    }
    time1_total = time1_hours + time1_minutes + time1_seconds;
    //converts time2 into seconds
    time2_hours = document.getElementById("hours2").value * 60 *60;
    time2_minutes = document.getElementById("minutes2").value * 60;
    time2_seconds = document.getElementById("seconds2").value;

    // If seconds input is empty, default to 0
    if (time2_seconds === "") {
        time2_seconds = 0;
    } else {
        time2_seconds = parseInt(time2_seconds);
    }

    time2_total = time2_hours + time2_minutes +time2_seconds;

    let time3; // the final total
    
    //totals up the time based on addition or subtraction
    if(addition == 1){
        time3 = time1_total+time2_total;
    }else if(addition== 2){
        time3 = time1_total-time2_total;
    }else{
        alert("Please choose a method before hitting submit")
        return; // Stop execution if the addition is not 1 or 2
    }

    // Calculate hours, minutes, and seconds from time3
    let hours = Math.floor(time3 / 3600);
    let minutes = Math.floor((time3 % 3600) / 60);
    let seconds = time3 % 60;     

    document.getElementById("Output").textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

//Add an event listener to the "Submit" button that calls a function on click
document.getElementById("mySubmit").addEventListener("click", calculateTime);

/*
TODO:
-Convert back to regular time from seconds
-CSS styling
*/

