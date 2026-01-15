let Honger = 100
let Slaap = 100
let Plezier = 100

function stats(){

    if (Honger > 0){
        Honger = Honger - 1;
        Slaap = Slaap - 1;
        Plezier = Plezier - 1;
    console.log(Honger, Slaap, Plezier)
    document.getElementById("HongerStat").innerText = Honger;
    document.getElementById("SlaapStat").innerText = Slaap;
    document.getElementById("PlezierStat").innerText = Plezier;
    }

}

setInterval(stats, 1000)
