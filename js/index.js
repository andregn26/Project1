/**************************** INDEX **************************************/

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

document.getElementById("game-board").style.display = "none";

document.getElementById("start-button").onclick = () => {
    document.getElementById("game-board").style.display = "block";
    startGame();
};


let currentGame;


function startGame() {
    
    currentGame = new Game();
    
    let currentBackground = new Background();
    currentGame.background = currentBackground;
    
    let currentBoat = new Boat();
    currentGame.boat = currentBoat;


//   currentGame.boat.draw();
//   currentGame.background.drawBackground();
//   cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
};  

function workingBackground() {
    currentGame.background.drawBackground();
    currentGame.background.moveBackground();
}

function workingBoat() {
    currentGame.boat.draw();
}

function createObstacle() {
    let random = Math.floor(Math.random() * width);
    let newObstacle = new Obstacle(random, 10, 30, 150, "red");
    obstacles.push(newObstacle);
    currentGame.obstacles.drawObstacle()
}

function updateCanvas() {
    
    context.clearRect(0, 0, width, height);
    workingBackground()
    workingBoat()
    createObstacle()
    // currentGame.background.drawBackground();
    // currentGame.background.moveBackground();
   
    requestAnimationFrame(updateCanvas);
}







/**************************** GAME INITIALIZATION **************************************/



// function updateEverything() {
//     context.clearRect(0, 0, width, height);
//     boatOne.drawBoat();

//     requestAnimationFrame(updateEverything);
// }

document.addEventListener("keydown", (keyboardEvent) => {
    currentGame.boat.moveBoat(keyboardEvent.key);
  });
  

