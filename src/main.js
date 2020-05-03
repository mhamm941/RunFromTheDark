let config = {
   // parent: 'myGame',
    type: Phaser.WEBGL,
    width: 740,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [music, menu, opening, play, gameOver]
};


let game = new Phaser.Game(config);

let level;

let spaceBare;

let lifeTracker;
let scoreLeft;

let playScore;
let displayScore;

