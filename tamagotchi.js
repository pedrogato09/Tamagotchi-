let Honger = 100
let Slaap = 100
let Plezier = 100
let musicStarted = false;

const emoties = {
    blij: { emoji: "😊", text: "Blij" },
    verdrietig: { emoji: "😢", text: "Verdrietig" },
    boos: { emoji: "😤", text: "Boos" },
    moe: { emoji: "😴", text: "Moe" },
    hongerig: { emoji: "🤤", text: "Hongerig" },
    vrolijk: { emoji: "😂", text: "Vrolijk" },
    neutraal: { emoji: "😐", text: "Neutraal" },
    verliefd: { emoji: "😍", text: "Verliefd" },
    slaperig: { emoji: "😪", text: "Slaperig" }
};

function bepaalEmotie() {
    // Als veel stats laag zijn: verdrietig
    if (Honger <= 20 && Slaap <= 20 && Plezier <= 20) {
        return emoties.verdrietig;
    }
    
    // Als honger heel laag: hongerig
    if (Honger <= 15) {
        return emoties.hongerig;
    }
    
    // Als slaap heel laag: slaperig/moe
    if (Slaap <= 15) {
        return emoties.slaperig;
    }
    
    // Als plezier heel laag: boos
    if (Plezier <= 15) {
        return emoties.boos;
    }
    
    // Als alles laag: moe
    if (Honger <= 40 && Slaap <= 40 && Plezier <= 40) {
        return emoties.moe;
    }
    
    // Als alles hoog: vrolijk
    if (Honger >= 80 && Slaap >= 80 && Plezier >= 80) {
        return emoties.vrolijk;
    }
    
    // Als alles oké: blij
    if (Honger >= 50 && Slaap >= 50 && Plezier >= 50) {
        return emoties.blij;
    }
    
    // Default: neutraal
    return emoties.neutraal;
}

function updateEmotie() {
    const emotie = bepaalEmotie();
    document.getElementById("Emotie").innerText = emotie.emoji;
    document.getElementById("EmotieText").innerText = emotie.text;
}


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
    
    // Update emotie
    updateEmotie();
    
if (Honger <= 30 || Slaap <= 30 || Plezier <= 30) {
    document.getElementById("ChatBox").classList.add("show");
}
else {
    document.getElementById("ChatBox").classList.remove("show");
}
document.getElementById("TextHonger").classList.toggle("show", Honger <= 30);
document.getElementById("TextSlaap").classList.toggle("show", Slaap <= 30);
document.getElementById("TextPlezier").classList.toggle("show", Plezier <= 30);
    
}

setInterval(stats, 1000)

    updateEmotie();
function eten() {
    Honger += 10;
    if (Honger > 100) Honger = 100;
    document.getElementById("HongerStat").innerText = Honger;

    const eatSound = document.getElementById("eatSound");
    eatSound.currentTime = 0;
    eatSound.play().catch(error => console.log("Sound play failed:", error));
}
    updateEmotie();

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
    updateEmotie();
    if (Plezier > 100) Plezier = 100;
    document.getElementById("PlezierStat").innerText = Plezier;

    const playSound = document.getElementById("playSound");
    playSound.currentTime = 0;
    playSound.play().catch(error => console.log("Sound play failed:", error));
}

Honger = Math.max(0, Honger - 1);
Slaap = Math.max(0, Slaap - 1);
Plezier = Math.max(0, Plezier - 1);

