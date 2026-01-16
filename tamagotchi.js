let Honger = 100
let Slaap = 100
let Plezier = 100
let musicStarted = false;


function playBackgroundMusic() {
    if (!musicStarted) {
        const bgMusic = document.getElementById("backgroundMusic");
        bgMusic.volume = 0.3;
        bgMusic.muted = false;
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.log("Background music play failed:", error));
        }
        musicStarted = true;
    }
}

document.addEventListener('click', playBackgroundMusic);


window.addEventListener('load', function() {
    const bgMusic = document.getElementById("backgroundMusic");
    bgMusic.muted = true;
    bgMusic.volume = 0.3;
    bgMusic.play().catch(error => console.log("Muted autoplay failed:", error));
});


function stats() {
    if (Honger > 0) {
        Honger -= 1;
    }
     if (Slaap > 0) {
        Slaap -= 1;
    }
     if(Plezier > 0) {
        Plezier -= 1;
    }
         console.log(Honger, Slaap, Plezier)
        document.getElementById("HongerStat").innerText = Honger;
        document.getElementById("SlaapStat").innerText = Slaap;
        document.getElementById("PlezierStat").innerText = Plezier;
if (Honger <= 30 || Slaap <= 30 || Plezier <= 30) {
    document.getElementById("ChatBox").style.display = "block";
}
else {
        document.getElementById("ChatBox").style.display = "none";
     }
        document.getElementById("TextHonger").style.display  = Honger  <= 30 ? "block" : "none";
        document.getElementById("TextSlaap").style.display   = Slaap   <= 30 ? "block" : "none";
        document.getElementById("TextPlezier").style.display = Plezier <= 30 ? "block" : "none";
    
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

    const sleepSound = document.getElementById("sleepSound");
    sleepSound.currentTime = 0;
    sleepSound.play().catch(error => console.log("Sound play failed:", error));
}

function spelen() {
    Plezier += 10;
    if (Plezier > 100) Plezier = 100;
    document.getElementById("PlezierStat").innerText = Plezier;

    const playSound = document.getElementById("playSound");
    playSound.currentTime = 0;
    playSound.play().catch(error => console.log("Sound play failed:", error));
}

Honger = Math.max(0, Honger - 1);
Slaap = Math.max(0, Slaap - 1);
Plezier = Math.max(0, Plezier - 1);

