const music = document.getElementById("bgMusic");
const splash = document.getElementById("enterScreen");

function enterSite(){
    music.play();
    splash.textContent = "1";
    setTimeout(() => {
        splash.textContent = "2";
    }, 900);
    setTimeout(() => {
        splash.textContent = "3";
    }, 1800);
    setTimeout(() => {
        splash.textContent = "4";
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

console.log('just a personal website ;) ... or is it?');