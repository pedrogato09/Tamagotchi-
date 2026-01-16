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

function eten() {
    Honger += 10;
    if (Honger > 100) Honger = 100;
    document.getElementById("HongerStat").innerText = Honger;
    
   
    const eatSound = document.getElementById("eatSound");
    eatSound.currentTime = 0;
    eatSound.play().catch(error => console.log("Sound play failed:", error));
}

function slapen() {
    Slaap += 10;
    if (Slaap > 100) Slaap = 100;
    document.getElementById("SlaapStat").innerText = Slaap;
    
    // Play sleep sound
    const sleepSound = document.getElementById("sleepSound");
    sleepSound.currentTime = 0;
    sleepSound.play().catch(error => console.log("Sound play failed:", error));
}

function spelen() {
    Plezier += 10;
    if (Plezier > 100) Plezier = 100;
    document.getElementById("PlezierStat").innerText = Plezier;
    
    // Play play sound
    const playSound = document.getElementById("playSound");
    playSound.currentTime = 0;
    playSound.play().catch(error => console.log("Sound play failed:", error));
}

Honger = Math.max(0, Honger - 1);
Slaap = Math.max(0, Slaap - 1);
Plezier = Math.max(0, Plezier - 1);

