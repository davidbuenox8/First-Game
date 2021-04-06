const game = new Game();


function preload() {
    game.preload();
}

function setup() {
    let canvas = createCanvas(900, 500);
    canvas.parent('gameWindow');
    game.setup();
    game.friend.setup();
    // game.bomb.setup();
}

function draw() {
    game.draw();
}


function keyPressed() {
    // if (keyCode === 39 && game.player.y !== 450 - game.player.height) {
    //   game.player.moveRight();
    // game.player.direction = 'E';
    // }
    //if (keyCode === 37 && game.player.y !== 450 - game.player.height) {
    //game.player.moveLeft();
    // game.player.direction = 'W';
    // }
    if (keyCode === 38) {
        game.player.jump();
        game.playerImage = game.playerJump;
    };
    if (keyCode === 32) {
        game.player.teleport();
        game.playerImage = game.playerJump;
    }
}





