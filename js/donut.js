class Obstacle {
    constructor(image) {
        this.image = image
        this.width = 150
        this.height = 150
        this.x = 550
        this.y = 220

       // for (let i = 0; i < 15; i++) {
       //     this.obstacles.push(new Obstacle());
        //  }
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }

    
}