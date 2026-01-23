let Honger = 101
let Slaap = 101
let Plezier = 101
let musicStarted = false;
let HongerCooldown = false
let SlaapCooldown = false
let PlezierCooldown = false
let GameOver = false;
const RestartBtn = document.getElementById("RestartBtn");

const emoties = [
    { name: "blij", emoji: "😊", text: "Blij" },
    { name: "verdrietig", emoji: "😢", text: "Verdrietig" },
    { name: "boos", emoji: "😤", text: "Boos" },
    { name: "moe", emoji: "😴", text: "Moe" },
    { name: "hongerig", emoji: "🤤", text: "Hongerig" },
    { name: "vrolijk", emoji: "😂", text: "Vrolijk" },
    { name: "neutraal", emoji: "😐", text: "Neutraal" },
    { name: "verliefd", emoji: "😍", text: "Verliefd" },
    { name: "slaperig", emoji: "😪", text: "Slaperig" }
];

function bepaalEmotie() {
    // Als veel stats laag zijn: verdrietig
    if (Honger <= 20 && Slaap <= 20 && Plezier <= 20) {
        return emoties.find(e => e.name === "verdrietig");
    }
    
    // Als honger heel laag: hongerig
    if (Honger <= 15) {
        return emoties.find(e => e.name === "hongerig");
    }
    
    // Als slaap heel laag: slaperig/moe
    if (Slaap <= 15) {
        return emoties.find(e => e.name === "slaperig");
    }
    
    // Als plezier heel laag: boos
    if (Plezier <= 15) {
        return emoties.find(e => e.name === "boos");
    }
    
    // Als alles laag: moe
    if (Honger <= 40 && Slaap <= 40 && Plezier <= 40) {
        return emoties.find(e => e.name === "moe");
    }
    
    // Als alles hoog: vrolijk
    if (Honger >= 80 && Slaap >= 80 && Plezier >= 80) {
        return emoties.find(e => e.name === "vrolijk");
    }
    
    // Als alles oké: blij
    if (Honger >= 50 && Slaap >= 50 && Plezier >= 50) {
        return emoties.find(e => e.name === "blij");
    }
    
    // Default: neutraal
    return emoties.find(e => e.name === "neutraal");
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

    if (GameOver) return;

    if (Honger > 0) {
        Honger -= 1;
    }
     if (Slaap > 0) {
        Slaap -= 1;
    }
     if(Plezier > 0) {
        Plezier -= 1;
    }
    if (GameOver) return;

    if (Honger <= 0 || Slaap <= 0 || Plezier <= 0) {
    GameOver = true;
    document.getElementById("GameOver").classList.add("show");
    console.log("GAME OVER!")
    // show screen
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

RestartBtn.addEventListener("click", function(){ 
    GameOver = false;
    document.getElementById("GameOver").classList.remove("show");
    Honger = 101;
    Slaap = 101;
    Plezier = 101;
    document.getElementById("HongerStat").innerText = Honger;
    document.getElementById("SlaapStat").innerText = Slaap;
    document.getElementById("PlezierStat").innerText = Plezier;
    updateEmotie();
})

setInterval(stats, 1000)

    updateEmotie();
function eten() {
    if (HongerCooldown) return;
    
    HongerCooldown = true;

    Honger += 10;

    if (Plezier > 2) Plezier -= 2;
    if (Honger > 100) Honger = 100;
    document.getElementById("HongerStat").innerText = Honger;

    const eatSound = document.getElementById("eatSound");
    eatSound.currentTime = 0;
    eatSound.play().catch(error => console.log("Sound play failed:", error));


    setTimeout(() => {
  HongerCooldown = false;
}, 2000);
}
    updateEmotie();

function slapen() {
    if (SlaapCooldown) return;
    
    SlaapCooldown = true;

    Slaap += 10;
    if (Honger > 2) Honger -= 2;
    if (Slaap > 100) Slaap = 100;
    document.getElementById("SlaapStat").innerText = Slaap;

    const sleepSound = document.getElementById("sleepSound");
    sleepSound.currentTime = 0;
    sleepSound.play().catch(error => console.log("Sound play failed:", error));

    setTimeout(() => {
    SlaapCooldown = false;
}, 2000);
}

function spelen() {
    if (PlezierCooldown) return;
    
    PlezierCooldown = true;

    Plezier += 10;
    if (Slaap > 2) Slaap -= 2;
    updateEmotie();
    if (Plezier > 100) Plezier = 100;
    document.getElementById("PlezierStat").innerText = Plezier;

    const playSound = document.getElementById("playSound");
    playSound.currentTime = 0;
    playSound.play().catch(error => console.log("Sound play failed:", error));

    setTimeout(() => {
    PlezierCooldown = false;
},  2000);
}

Honger = Math.max(0, Honger - 1);
Slaap = Math.max(0, Slaap - 1);
Plezier = Math.max(0, Plezier - 1);
