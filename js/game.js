class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.donuts = []
        this.donutImage 
        this.sushis = []
        this.sushiImage
        

    }
    preload() {
        this.backgroundImage = [{ src: loadImage('assets/green-blue-violet-gradient.jpg'), x: 0, speed: 0 }]
        this.player.image = loadImage('assets/—Pngtree—shark mascot_7457106.png')
        this.donutImage = loadImage('assets/—Pngtree—diving donut_4747416.png')
        this.sushiImage = loadImage('assets/—Pngtree—sushi cartoon collection_7510616.png')

        for(let i = 0; i < 25; i++) {
            this.donuts.push(new Donut(this.donutImage))
        }
        for(let j = 0; j < 25; j++) {
            this.sushis.push(new Sushi(this.sushiImage))
        }
    }

    draw() {
        clear()

        this.background.draw()
        
        this.donuts.forEach(function (donut) {
			donut.draw()
            donut.move()
            donut.display()
		})       
        this.sushis.forEach(function (sushi) {
			sushi.draw()
            sushi.move()
            sushi.display()
		})       
        this.player.draw()

        this.donuts = this.donuts.filter((donut) => {
            if (donut.collision(this.player)) {
                return false
            } else {
                return true
            }
        })
        this.sushis = this.sushis.filter((sushi) => {
            if (sushi.collision(this.player)) {
                return false
            } else {
                return true
            }
        })
    }
    
  

}