const game = new Game()

function preload() {
	game.preload()
}

function setup() {
    let cnv = createCanvas(1200, 600)
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);


}

function draw() {
    game.draw()

}

function keyPressed() {
	if (keyCode === 38 && keyIsPressed) {
		game.background.moveUp()
	} else if (keyCode === 40 && keyIsPressed) {
        game.background.moveDown()
    } else if (keyCode === 37 && keyIsPressed) {
        game.background.moveLeft()
    } else if (keyCode === 39 && keyIsPressed) {
        game.background.moveRight()
    }
}