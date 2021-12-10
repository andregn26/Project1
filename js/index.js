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

function detectCollision(obstacle) {
    return !(
      currentGame.boat.x > obstacle.x + obstacle.width ||
      currentGame.boat.x + currentGame.boat.width < obstacle.x ||
      currentGame.boat.y > obstacle.y + obstacle.height
    );
  }

function createObstacle() {
    currentGame.obstaclesFrequency ++
    if (currentGame.obstaclesFrequency % 150 === 1) {
        
        const randomObstacleX = Math.floor(Math.random() * 700);  
        const randomObstacleY = 0;
        const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
        const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;

        const newObstacle = new Obstacle(
            randomObstacleX,
            randomObstacleY,
            randomObstacleWidth,
            randomObstacleHeight
        );
        currentGame.obstacles.push(newObstacle);
    }
    currentGame.obstacles.forEach((obstacle) => {
        obstacle.y += 1;
        obstacle.drawObstacle();

        if (detectCollision(obstacle)) {
            currentGame.gameOver = true;
            currentGame.obstaclesFrequency = 0;
            currentGame.score = 0;
            currentGame.obstacles = [];
            // document.getElementById("score").innerHTML = 0;
            document.getElementById("game-board").style.display = "none";
            cancelAnimationFrame(currentGame.animationId);
            alert("AAAA");
        }
    })
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
  

