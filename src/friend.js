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
    updateRescue() {
        let rescueCount = document.getElementById('friend');
        let newImage = document.createElement('img');
        newImage.src = 'images/friend.gif';
        rescueCount.appendChild(newImage);

    }
    catchFriend(playerInfo) {
        const friendX = this.x + this.width / 2;
        const friendY = this.y + this.height / 2;
        const playerX = playerInfo.x + game.player.width / 2;
        const playerY = playerInfo.y + game.player.height / 2;


        if (dist(friendX, friendY, playerX, playerY) < 50) {
            game.pickFriendSound.play();
            this.updateRescue();
            this.setRandomPosition();
            game.addBomb();
            if (game.friends.length === 5) {
                game.addHeart();
            };
            if (game.friends.length >= 1 && game.lemons.length === 0) {
                game.addLemon();
            }
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

class Heart {
    constructor() {
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * 350);
        this.width = 50;
        this.height = 50;
    }
    catchHeart(playerInfo) {
        const heartX = this.x + this.width / 2;
        const heartY = this.y + this.height / 2;
        const playerX = playerInfo.x + game.player.width / 2;
        const playerY = playerInfo.y + game.player.height / 2;


        if (dist(heartX, heartY, playerX, playerY) < 50) {
            game.pickHeartSound.play();
            game.hearts.pop()
            game.player.score += 3000;
            game.player.updateScore();
            if (game.player.lives < 3) {
                game.player.lives += 1;
                game.player.addLives();
            }
        }
    }
    draw() {
        this.catchHeart(game.player);
        image(game.heartImage, this.x, this.y, this.width, this.height)
    }

}

class Lemon {
    constructor() {
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * 350);
        this.width = 50;
        this.height = 60;
    }
    catchLemon(playerInfo) {
        const lemonX = this.x + this.width / 2;
        const lemonY = this.y + this.height / 2;
        const playerX = playerInfo.x + game.player.width / 2;
        const playerY = playerInfo.y + game.player.height / 2;


        if (dist(lemonX, lemonY, playerX, playerY) < 25) {
            game.pickLemonSound.play();
            game.lemons.pop()
            game.player.score += 5000;
            game.player.updateScore();

        }
    }
    draw() {
        this.catchLemon(game.player);
        image(game.lemonImage, this.x, this.y, this.width, this.height)
    }
}