class Bomb {
    constructor() {
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * 350);
        this.width = 70;
        this.height = 70;
    }

    collusion(playerInfo) {
        const bombX = this.x + this.width / 2;
        const bombY = this.y + this.height / 2;
        const playerX = playerInfo.x + game.player.width / 2;
        const playerY = playerInfo.y + game.player.height / 2;
        if (dist(playerX, playerY, bombX, bombY) < 50) {
            game.hitBombSound.play();
            game.player.lives += -1;
            game.player.score += -500;
            game.player.updateScore();
            game.player.takeLives();
            game.player.y = 450 - game.player.height;
            game.player.x = 5;
        }
    }
    draw() {
        this.collusion(game.player);
        image(game.bombImage, this.x, this.y, this.width, this.height)
    }
}