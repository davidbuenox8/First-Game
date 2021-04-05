class Friend {
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
    catchFriend(playerInfo) {
        const friendX = this.x + this.width / 2;
        const friendY = this.y + this.height / 2;
        const playerX = playerInfo.x + game.player.width / 2;
        const playerY = playerInfo.y + game.player.height / 2;


        if (dist(friendX, friendY, playerX, playerY) < 50) {
            this.setRandomPosition();
            game.addBomb();
            game.player.score += 1000;
            game.friends.push('Friend');
            game.player.updateScore();
        }
    }
    draw() {
        this.catchFriend(game.player);
        image(game.friendImage, this.x, this.y, this.width, this.height)
        //game.friendImage.position(this.x, this.y)
    }
}