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
        // this.bomb = new Bomb(this.bombImage)
        this.bombs = [];
        this.friends = [];
        this.hearts = [];
        this.lemons = [];
    }

    preload() {
        this.backgroundImage = loadImage('../images/background1.png');
        this.playerImageS = loadImage('../images/player.png')
        this.playerImageR = loadImage('../images/playerRight.png');
        this.playerImageL = loadImage('../images/playerLeft.png');
        this.playerJump = loadImage('../images/playerjump.png');
        this.friendImage = loadImage('../images/rescue1.png');
        this.bombImage = loadImage('../images/bomb1.gif');
        this.heartImage = loadImage('../images/heart.png')
        this.lemonImage = loadImage('../images/lemon.png');
    }
    addBomb() {
        //const newBomb = new Bomb();
        this.bombs.push(new Bomb());


    }

    addHeart() {
        this.hearts.push(new Heart());

    }
    addLemon() {
        this.lemons.push(new Lemon());
    }

    draw() {
        clear();
        image(this.backgroundImage, 0, 0, 1000, 500);
        this.player.draw();
        this.friend.draw();
        for (let bomb of this.bombs) {
            bomb.draw();
        };
        for (let heart of this.hearts) {
            heart.draw();
        }
        for (let lemon of this.lemons) {
            lemon.draw();
        }

        this.endGame();

    }
    endGame() {
        if (this.player.lives === 0) {
            alert(`You Died! Your final score is: ${this.player.score}`);
            setup();
        } else if (this.friends.length === 10) {
            alert(`Nice! You have rescued all your friends. Your final score is: ${this.player.score}`);
            setup();
        }
    }
}