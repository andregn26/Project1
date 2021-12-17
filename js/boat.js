/**************************** MY BOAT **************************************/

class Boat {
    constructor () {
        this.x = (width/2 - 25);
        this.y = (height-150);
        this.width = 50;
        this.height = 100;
        
    } 
    draw(){
        const img = new Image();
        img.src = "./images/boat.png";
        context.drawImage(img, this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        this.x -= 20;
    }

    moveRight(){
        this.x += 20;
    }

    moveDown(){
        this.y += 20;
    }

    moveUp(){
        this.y -= 20;
    }

    moveBoat(key){
       
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(key){
            case "ArrowLeft":
                if (this.x > 50+this.width) {
                    this.moveLeft()
                    
                }
            break
            case "ArrowRight":
                if(this.x < width-50-this.width*2) {
                    this.moveRight()
                }
            break
            case "ArrowDown":
                if(this.y < height-this.height) {
                    this.moveDown()
                }  
            break
            case "ArrowUp":
                if(this.y > 0+this.height*2) {
                    this.moveUp()
                }
                break  
        }
    }
    
}

