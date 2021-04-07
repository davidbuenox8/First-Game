const game = new Game();




function preload() {
    game.preload();
}

function setup() {

    let canvas = createCanvas(900, 500);
    canvas.parent('gameWindow');
    game.setup();
    game.friend.setup();

}

function draw() {
    game.draw();
}


function endGame() {
    game.player.score = 0;
    game.player.x = 5;
    game.playerdirection = 'E';
    game.player.y = 450 - this.height;
    game.playerscore = 0;
    game.playerlives = 3;
    game.bombs = [];
    game.friends = [];
    game.hearts = [];
    game.lemons = [];
    const score = document.getElementById('score');
    score.innerHTML = 0;
    const rescueCount = document.getElementById('friend');
    rescueCount.innerHTML = '';
    const lives = document.getElementById('lives');
    lives.innerHTML = `<img class='heart' src="images/heart.png" alt="heart"><img class='heart'
    src="images/heart.png" alt="heart"><img class='heart' src="images/heart.png" alt="heart">`


}

function restart() {
    console.log('restart')
}

const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', function () {
    setup();
    endGame();
});

function keyPressed() {

    if (keyCode === 38) {
        game.player.jump();
        game.playerImage = game.playerJump;

    };
    if (keyCode === 32) {
        game.player.teleport();
        game.playerImage = game.playerJump;
    }
    if (keyCode === 40) {
        game.player.direction = 'S'
    }
}







