class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.donuts = []
        this.donutImage 
    }
    preload() {
        this.backgroundImage = [{ src: loadImage('assets/green-blue-violet-gradient.jpg'), x: 0, speed: 0 }]
        this.player.image = loadImage('assets/—Pngtree—shark mascot_7457106.png')
        this.donutImage = loadImage('assets/—Pngtree—diving donut_4747416.png')
    }
    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        if (frameCount % 90 === 0) {
			this.donuts.push(new Donut(this.donutImage))
        }

        this.donuts.forEach(function (donut) {
			donut.draw()
		})
       
    }
}