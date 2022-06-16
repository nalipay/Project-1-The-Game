class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.donuts = []
        this.donutImage 
        this.jellys = []
        this.jellyImage

    }
    preload() {
        this.backgroundImage = [{ src: loadImage('assets/green-blue-violet-gradient.jpg'), x: 0, speed: 0 }]
        this.player.image = loadImage('assets/—Pngtree—shark mascot_7457106.png')
        this.donutImage = loadImage('assets/—Pngtree—diving donut_4747416.png')
        this.jellyImage = createImg('assets/ZOsw.gif', 'jelly')


        for(let i = 0; i < 50; i++) {
            this.donuts.push(new Donut(this.donutImage))
        }
       
        for(let j = 0; j < 50; j++) {
            this.jellys.push(new Jelly(this.jellyImage))
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

        this.player.draw()

        this.jellys.forEach(function (jelly) {
            jelly.draw()
        })

        this.donuts = this.donuts.filter((donut) => {
            if (donut.collision(this.player)) {
                return false
            } else {
                return true
            }
        })



    }
    
  

}