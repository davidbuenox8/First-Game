class Game {
    constructor() {
        this.backgroundImage;
        this.playerImage;
        this.ghostImage;
        this.friendImage;
        this.bombImage;
    }
    setup() {
        this.player = new Player();
        this.friend = new Friend();
        this.bomb = new Bomb();

    }

    preload() {
        this.backgroundImage = loadImage('../images/background1.png');
        this.playerImageS = loadImage('../images/player.png')
        this.playerImageR = loadImage('../images/playerRight.png');
        this.playerImageL = loadImage('../images/playerLeft.png');
        this.playerJump = loadImage('../images/playerjump.png');
        this.friendImage = loadImage('../images/friend.gif');
        this.bombImage = loadImage('../images/bomb1.gif')
    }

    draw() {
        clear();
        image(this.backgroundImage, 0, 0, 1000, 500);
        this.player.draw();
        this.friend.draw();
        this.bomb.draw();
        this.endGame();
    }
    endGame() {
        if (this.player.lives === 0) {
            alert(`You Died! Your final score is: ${this.player.score}`);
            setup();
        } else if (this.player.score === 50) {
            alert(`Congratulations! You have saved all your friends and reach the maximum score`);
            setup();
        }
    }

}