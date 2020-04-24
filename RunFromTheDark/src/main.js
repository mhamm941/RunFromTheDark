let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 485,
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
    scene: [play]
};

let game = new Phaser.Game(config);

let keySPACE;

