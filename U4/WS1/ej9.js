window.onload = () =>{
    jacinto = document.getElementById("jacinto");
    moveJacinto = false;

    osvaldo = document.getElementById("osvaldo");
    moveOsvaldo = false;

    jacinto.addEventListener("click", () => {
        console.log("click");
        moveJacinto = !moveJacinto;
    });

    osvaldo.addEventListener("click", (e) => {
        console.log("click");
        moveOsvaldo= !moveOsvaldo;


        osvaldoX = e.clientX;
        osvaldoY = e.clientY;

        
        console.log("OSVALDO" + osvaldoX + ", " + osvaldoY);
    });

    document.addEventListener("mousemove", (e) =>{
        console.log(e.clientX + " " + e.clientY)
        if(moveJacinto){
            jacinto.style.top = e.clientY-20 + "px";
            jacinto.style.left = e.clientX-20 + "px";
        }

        if(moveOsvaldo){
            osvaldo.style.top = e.clientY-osvaldoY + "px";
            osvaldo.style.left = e.clientX-osvaldoX + "px";
        }
    });

}