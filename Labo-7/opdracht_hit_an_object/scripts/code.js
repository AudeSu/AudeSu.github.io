let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    document.getElementById("target").addEventListener("click", processHit);
    document.getElementById("btnStart").addEventListener("click", start);
};

const start = () => {
    global.timeoutId = setInterval(continueGame, global.MOVE_DELAY);
    document.getElementById("btnStart").remove();
}

const processHit = () => {
    if(document.getElementById("target").getAttribute("src") === global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) {
        endGame();
    }
    else {
        global.score += 1;
        document.getElementById("txtScore").innerText = global.score;
        continueGame();
    }
}

const endGame = () => {
    alert("GAME OVER");
    clearTimeout(global.timeoutId);
}

const continueGame = () => {
    let target = document.getElementById("target");
    target.style.top = Math.random() * (600 - global.IMAGE_SIZE) + "px";
    target.style.left = Math.random() * (400 - global.IMAGE_SIZE) + "px";
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * 4) + global.IMAGE_PATH_SUFFIX)
}

window.addEventListener("load", setup);


