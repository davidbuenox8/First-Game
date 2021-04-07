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
        //images
        this.backgroundImage = loadImage('images/background1.png');
        this.playerImageS = loadImage('images/player.png')
        this.playerImageR = loadImage('images/playerRight.png');
        this.playerImageL = loadImage('images/playerLeft.png');
        this.playerJump = loadImage('./images/playerjump.png');
        this.friendImage = loadImage('./images/rescue2.png');
        //  this.friendImage1 = loadImage('../images/rescue1.png');
        //  this.friendImage2 = loadImage('../images/rescue2.png');
        this.bombImage = loadImage('./images/bomb1.gif');
        this.heartImage = loadImage('./images/heart.png')
        this.lemonImage = loadImage('./images/lemon.png');
        //sound
        this.jumpSound = loadSound('./sounds/jump02.mp3');
        this.teleportSound = loadSound('./sounds/shoot00.mp3');
        this.pickLemonSound = loadSound('./sounds/pickLemon.mp3');
        this.pickFriendSound = loadSound('./sounds/pickFriend1.mp3');
        this.pickHeartSound = loadSound('./sounds/pickHeart.mp3');
        this.hitBombSound = loadSound('./sounds/hitBomb.mp3');
        this.looseGameSound = loadSound('./sounds/lose.mp3');
        this.winGameSound = loadSound('./sounds/win.mp3');
    }

    addBomb() {
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
            this.looseGameSound.play();
            alert(`You Died! Your final score is: ${this.player.score}`);
            setup();
            endGame();
        } else if (this.friends.length === 10) {
            this.winGameSound.play();
            alert(`Congratulations! You have rescued all your friends. Your final score is: ${this.player.score}`);
            setup();
            endGame();
        }
    }
}