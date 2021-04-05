class Bomb {
    constructor() {
        this.x;
        this.y;
        this.width = 70;
        this.height = 70;
    }
    setup() {
        this.setRandomPosition();
    }
    setRandomPosition() {
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * 350);
    }
    draw() {

        image(game.bombImage, this.x, this.y, this.width, this.height)
    }

}