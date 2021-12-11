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
        context.fillStyle = "orange";
       
      } else if(this.type === "good") {
        context.fillStyle = "green";
        
      }
      context.fillRect(this.x, this.y, this.width, this.height);
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