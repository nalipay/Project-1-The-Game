class Player {
    constructor() {
        this.width = 200
		this.height = 200;
        this.image
        this.x = 550
        this.y = 220
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
        
    }
}