class Jelly {
    constructor(image) {
        this.image = image
        this.width = 150
        this.height = 150
        this.x = random(-1800, 3000)
        this.y = random(-900, 1500)
        this.startX = this.x
        this.startY = this.y
        this.speed = random(-1, 1) 
    } 
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }

    moveUp() {this.y += 5}
    moveDown() {this.y -= 5}
    moveLeft() {this.x += 5}
    moveRight() {this.x -= 5}

    collision(playerInfo) {
        const jellyX = this.x + this.width / 2
		const jellyY = this.y + this.height / 2

        const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2

    if(gameStarted) {
        if (dist(jellyX, jellyY, playerX, playerY) > 70) {
			return false
		} else {
            let jellyCounter = document.querySelector('.jelly-counter')
            let countJelly = jellyCounter.innerText

            countJelly++

            jellyCounter.innerText = countJelly

            return true
		}
    }
}

    move() {
        if(frameCount % 30 === 0) {
            this.speed = -this.speed
        }
        this.y += this.speed;
      }

    display() {
        image(this.image, this.x, this.y, this.width, this.height)      
    }
    
}