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

    game.donuts.forEach(function(donut){
        donut.move()
    })

    game.sushis.forEach(function(sushi){
        sushi.move()
    })

}

function keyPressed() {
	if (keyCode === 38 && keyIsPressed) {
		game.background.moveUp()
        game.donuts.forEach(function(donut){
            donut.moveUp()
        })
        game.sushis.forEach(function(sushi){
            sushi.moveUp()
        })
	} else if (keyCode === 40 && keyIsPressed) {
        game.background.moveDown()
        game.donuts.forEach(function(donut){
            donut.moveDown()
        })
        game.sushis.forEach(function(sushi){
            sushi.moveDown()
        })
    } else if (keyCode === 37 && keyIsPressed) {
        game.background.moveLeft()
        game.donuts.forEach(function(donut){
            donut.moveLeft()
        })
        game.sushis.forEach(function(sushi){
            sushi.moveLeft()
        })
    } else if (keyCode === 39 && keyIsPressed) {
        game.background.moveRight()
        game.donuts.forEach(function(donut){
            donut.moveRight()
        })
        game.sushis.forEach(function(sushi){
            sushi.moveRight()
        })
    }
}