/**************************** OBSTACLE **************************************/

class Obstacle {
    constructor(x, y, width, height, type) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.type = type;
    }
  
    drawObstacle() {
      if(this.type === "bad") {
        const img = new Image() 
        img.src = "./images/obstacle.png";
        context.drawImage(img, this.x, this.y, this.width, this.height);
       
      } else if(this.type === "good") {
        const img = new Image() 
        img.src = "./images/fish.png";
        context.drawImage(img, this.x, this.y, this.width, this.height);
        
      }
      // context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  // class GoodObstacle {
  //   constructor(x,y,width, height, type) {
  //     this.x = x;
  //     this.y = y;
  //     this.width = width;
  //     this.height = height;
  //     this.type = type;
  //   }
    
  //   drawObstacle() {
  //     context.fillStyle = "green";
  //     context.fillRect(this.x, this.y, this.width, this.height);
  //   }
  // }