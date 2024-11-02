// function clock(){
//     var now= new Date();
//     var hours=now.getHours();
//     var minutes =now.getMinutes();
//     var seconds=now.getSeconds();
// hours=hours<10?"0"+ hours : hours;
// minutes=minutes<10?"0"+ minutes : minutes;
// seconds=seconds<10?"0"+ seconds : seconds;
//     var Time = hours +":" + minutes + ":" + seconds;
    
    
    
    
//     document.getElementById("con").innerHTML=Time;
// }



function clock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Update the elements individually
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Run the clock function every second to update the time
setInterval(clock, 1000);
