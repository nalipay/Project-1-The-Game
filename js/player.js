class Player {
    constructor() {
        this.width = 160;
		this.height = 160;
        this.image
        this.x = 550
        this.y = 220
    }
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }
}