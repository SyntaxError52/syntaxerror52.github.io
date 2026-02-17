const music = document.getElementById("bgMusic");
const splash = document.getElementById("enterScreen");

function enterSite(){
    music.play();
    splash.textContent = "Syntax";
    setTimeout(() => {
        splash.textContent = "Error";
    }, 900);
    setTimeout(() => {
        splash.textContent = "5";
    }, 1800);
    setTimeout(() => {
        splash.textContent = "2";
    }, 2700);
    setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("website").style.display = "inline-block";    
    }, 3600);
};

function toggleMusic(){
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};