/**************************** INDEX **************************************/

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

document.getElementById("game-board").style.display = "none";
document.getElementById("scoreDiv").style.display = "none";

document.getElementById("start-button").onclick = () => {
    document.getElementById("game-board").style.display = "block";
    document.getElementById("scoreDiv").style.display = "block";
    // document.getElementById("start-button").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    startGame();
};


let currentGame;


function startGame() {
    
    currentGame = new Game();
    
    let currentBackground = new Background();
    currentGame.background = currentBackground;
    
    let currentBoat = new Boat();
    currentGame.boat = currentBoat;

    updateCanvas();
};  



function drawBackground() {
    currentGame.background.drawBackground();
    currentGame.background.moveBackground();
}



function drawBoat() {
    currentGame.boat.draw();
}



function detectCollision(obstacle) {
    return !(
      currentGame.boat.x > obstacle.x + obstacle.width ||
      currentGame.boat.x + currentGame.boat.width < obstacle.x ||
      currentGame.boat.y > obstacle.y + obstacle.height ||
      currentGame.boat.y + currentGame.boat.height < obstacle.y
    );
  }



function createObstacle(type) {
   
    const randomObstacleX =  Math.floor(Math.random() * (650 - 100)) + 60;  
    const randomObstacleY = 0;
    const ObstacleWidth = 50;
    const ObstacleHeight =50;

    const newObstacle = new Obstacle(
        randomObstacleX,
        randomObstacleY,
        ObstacleWidth, //add the width of the obstacle image//
        ObstacleHeight, //add the height of the obstacle image//
        type
    );

        currentGame.obstacles.push(newObstacle);
}



//create function gameOver
function gameOver(){
    currentGame.gameOver = true;
    currentGame.obstaclesFrequency = 0;
    currentGame.score = 0;
    currentGame.obstacles = [];
    document.getElementById("score").innerHTML = 0;
    document.getElementById("game-board").style.display = "none";
    cancelAnimationFrame(currentGame.animationId);
    document.getElementById("start-button").style.display = "block";
    alert("AAAA");
       
}
    


function updateCanvas() {
    
    context.clearRect(0, 0, width, height);
    drawBackground();
    drawBoat();

    currentGame.obstaclesFrequency++;

     //Good obstacles
    if (currentGame.obstaclesFrequency % 400 === 1) {
        createObstacle("good");
    }

    //Bad obstacles
    if (currentGame.obstaclesFrequency % 150 === 1){
        createObstacle("bad");
    }

    currentGame.obstacles.forEach((obstacle, index) => {
        obstacle.y += 1;
        obstacle.drawObstacle();        

        if (detectCollision(obstacle)) {

            if(obstacle.type === "good"){
                //TODO Logic for good obstacles
                //increase score
                currentGame.score++;
                document.getElementById("score").innerHTML = currentGame.score;
                currentGame.obstacles.splice(index,1)
                // currentGame.obstacles.splice(index, 1);
                // currentGame.animationId = requestAnimationFrame(updateCanvas);
            }

            if(obstacle.type === "bad"){
                //TODO Logic for good obstacles
               gameOver(); 
                           
            }          
        }
    })
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
  

