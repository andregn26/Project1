class Background {
    constructor () {
        this.image = new Image();
        this.image.src = "./images/back.png";
        this.y = 0;
        // this.y = 0;
        // this.width = 700;
        // this.height = 600;
        this.speed = -1;
  }

  moveBackground() {
    this.y += this.speed;
    this.y %= height;
  }

  drawBackground() {
    context.drawImage(this.image, 0, this.y);
    if (this.speed < 0 ) {
        context.drawImage(this.image, 0, this.y + height);
    } else {
        context.drawImage(this.image, 0, this.y - this.img.height);
      }
  }
}

