
function clock(){
    let dateNow = new Date();

    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds);
    setTimeout(clock, 1000);
}

clock();