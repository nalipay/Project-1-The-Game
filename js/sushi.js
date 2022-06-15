class Sushi {
    constructor(image) {
        this.image = image
        this.width = 150
        this.height = 150
        this.x = random(-1800, 3000)
        this.y = random(-900, 1500)
        this.startX = this.x
        this.startY = this.y
        this.speed = random(-1, 1)
        //this.maxDistance = random(40, 70)
    }
    draw() {
        
        image(this.image, this.x, this.y, this.width, this.height)
    }

    moveUp() {this.y += 5}
    moveDown() {this.y -= 5}
    moveLeft() {this.x += 5}
    moveRight() {this.x -= 5}

    collision(playerInfo ) {
        const sushiX = this.x + this.width / 2
		const sushiY = this.y + this.height / 2

        const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2

        if (dist(sushiX, sushiY, playerX, playerY) > 70) {
			return false
		} else {
			return true
		}
    }
    move() {
        if(Math.abs(dist(this.x, this.y, this.startX, this.startY)) > 100) {
            this.speed = -this.speed
        }
        this.x += this.speed
      }

    display() {
        image(this.image, this.x, this.y, this.width, this.height)      
    }
}