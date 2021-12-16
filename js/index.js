/**************************** INDEX **************************************/

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

document.getElementById("canvas").style.display = "none";
document.getElementById("scoreDiv").style.display = "none";
document.getElementById("reset-button").style.display = "none";

document.getElementById("start-button").onclick = () => {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("scoreDiv").style.display = "block";
    // document.getElementById("start-button").style.display = "none";
    document.getElementById("box").style.display = "none";
    startGame();
};

document.getElementById("reset-button").onclick = () => {
    location.reload();
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


// function resetButton() {
//   let get = document.getElementById("reset-button")
//   get.classList.add("")
//   return get
// }

//create function gameOver
function gameOver(){
    currentGame.gameOver = true;
    currentGame.obstaclesFrequency = 0;
    currentGame.obstacles = [];
    document.getElementById("score").innerHTML = currentGame.score;
    document.getElementById("scoreDiv").style.display = "block";
    document.getElementById("canvas").style.display = "none";
    document.getElementById("body").style.backgroundImage = "url('../images/4064.jpg')";
    document.getElementById("reset-button").style.display = "block";
    document.getElementById("scoreDiv").style.position = "absolute";
    document.getElementById("scoreDiv").style.position = "absolute";
    document.getElementById("scoreDiv").textContent = currentGame.score;
    document.getElementById("finalMessage").style.display ="block";
    // document.getElementById("scoreDiv").style.borderRadius ="50%"
    // document.getElementById("scoreDiv").style.height ="100px"
    // document.getElementById("scoreDiv").style.width ="100px"
    // document.getElementById("scoreDiv").style.padding ="10px"
    document.getElementById("scoreDiv").classList.remove("scoreDiv")
    // document.getElementById("scoreDiv").classList.add("finalScreen");
    // document.getElementById("scoreDiv").setAttribute('id', 'scoreDivAfter')
    // let createDiv = document.createElement('div');
    // let insertText = createDiv.innerHTML = '<h1>You sunk the ship!</h1>';
    
    
    
    // alert("AAAA");
       
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
        if(obstacle.type === "good") {
            obstacle.y += 1;
            obstacle.drawObstacle(); 
        } 
        
        if(obstacle.type === "bad") {
          obstacle.y += 2;
          obstacle.drawObstacle();   
        }
        
               

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
                currentGame.gameOver = true;
                //TODO Logic for good obstacles
               
                           
            }          
        }

       
    })
    
    if (!currentGame.gameOver) {
        currentGame.animationId= requestAnimationFrame(updateCanvas);
    } else {
        gameOver(); 
        cancelAnimationFrame(currentGame.animationId);
    }
    
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
  

