const game = new Game()

let gameStarted = false

function preload() {
	game.preload()
}

function startGame() {
    gameStarted = true
    select(".start-image").hide()
    
}

function setup() {
    let cnv = createCanvas(1200, 600)
    cnv.parent("canvas")
   // let x = (windowWidth - width) / 2;
   // let y = (windowHeight - height) / 2;
   // cnv.position(x, y);

   document.getElementsByClassName("start-image").disabled = true
}

function draw() {
    game.draw()

    game.donuts.forEach(function(donut){
        donut.move()
    })


    game.jellys.forEach(function(jelly){
        jelly.move()
    })
    
}

function keyPressed() {
    if(gameStarted) {
        if (keyCode === 38 && keyIsPressed) {
            game.background.moveUp()
            game.donuts.forEach(function(donut){
                donut.moveUp()   
            })
            game.jellys.forEach(function(jelly){
                jelly.moveUp()   
            })
        } else if (keyCode === 40 && keyIsPressed) {
            game.background.moveDown()
            game.donuts.forEach(function(donut){
                donut.moveDown()
            })
            game.jellys.forEach(function(jelly){
                jelly.moveDown()
            })
        } else if (keyCode === 37 && keyIsPressed) {
            game.background.moveLeft()
            game.donuts.forEach(function(donut){
                donut.moveLeft()
            })
            game.jellys.forEach(function(jelly){
                jelly.moveLeft()
            })
        } else if (keyCode === 39 && keyIsPressed) {
            game.background.moveRight()
            game.donuts.forEach(function(donut){
                donut.moveRight()
            })
            game.jellys.forEach(function(jelly){
                jelly.moveRight()
            })
        }
    }
	
}