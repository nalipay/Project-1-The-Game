class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
    }
    preload() {
        this.backgroundImage = [{ src: loadImage('assets/—Pngtree—summer underwater world background template_878519.png'), x: 0, speed: 0 }]
        this.player.image = loadImage('assets/—Pngtree—shark mascot_7457106.png')
    }
    draw() {
        clear()
        this.background.draw()
        this.player.draw()
    }
}