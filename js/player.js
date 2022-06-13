class Player {
    constructor() {
        this.width = 100;
		this.height = 120;
        this.image
        this.x = 550
        this.y = 220
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
        
    }
}