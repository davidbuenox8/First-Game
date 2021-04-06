class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.2;
        this.velocity = 0;
        this.x = 5;
        this.direction = 'E';
        this.image;
        this.width = 100;
        this.height = 100;
        this.y = 450 - this.height;
        this.score = 0;
        this.lives = 3;
    }




    moveRight() {
        this.x += 2;
    }
    moveLeft() {
        this.x -= 2;
    }
    jump() {
        this.velocity = -10;
        this.direction = 'N';
    }
    teleport() {
        if (this.y !== 450 - this.height) {
            if (this.direction === 'E') {
                this.x += 200;
            } else if (this.direction === 'W') {
                this.x -= 200;
            } else {
                this.y -= 200;
            }
        }


    }
    updateScore() {
        const score = document.getElementById('score');
        score.innerHTML = this.score;
    }
    updateLives() {
        const lives = document.getElementById('lives');
        lives.innerHTML = this.lives;
    }
    //collusion(bombInfo) {
    //const playerX = this.x + this.width / 2;
    //const playerY = this.y + this.height / 2;
    //const bombX = bombInfo.x + game.bomb.width / 2;
    //const bombY = bombInfo.y + game.bomb.height / 2;


    //if (dist(playerX, playerY, bombX, bombY) < 50) {
    //this.lives += -1;
    //this.updateLives();
    //this.y = 450 - this.height;
    //this.x = 5;

    // }
    //}


    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.x <= -20) {
            this.x = -20;
        };
        if (this.x >= 820) {
            this.x = 820;
        }
        if (this.y >= 450 - this.height) {
            this.y = 450 - this.height;
            game.playerImage = game.playerImageS;
        };
        if (this.y <= -80) {
            this.y = -80;
        };
        if (keyIsDown(39) && this.y !== 450 - this.height) {
            this.moveRight();
            this.direction = 'E';
            game.playerImage = game.playerImageR;
        };
        if (keyIsDown(37) && this.y !== 450 - this.height) {
            game.player.moveLeft();
            game.player.direction = 'W';
            game.playerImage = game.playerImageL;
        };

        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}