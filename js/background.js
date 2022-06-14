class Background {
    constructor() {
        this.x = -1800
        this.y = -900
        let gravity = 0.2
    }

    draw() {
        background(57)
        image(game.backgroundImage[0].src, this.x, this.y, 4800, 2400)
        keyPressed()
		}

    moveUp() {
        if(this.y <= -50) {
            this.y += 30
        }
    }
    moveDown() {
         if(this.y > -1800) {
            this.y -= 30
        } 
    }
    moveLeft() {
        if(this.x <= -50) {
            this.x += 30
        }
    }
    moveRight() {
        if(this.x > -3600) {
            this.x -= 30
        }
    }
}