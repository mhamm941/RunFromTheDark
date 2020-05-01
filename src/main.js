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
    scene: [menu, opening, play, gameOver]
};

let scoreConfig = {
    fontFamily: 'Courier',
    fontSize: '28px',
    backgroundColor: '#ffda82',
    color: '#843605',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 100
}

let game = new Phaser.Game(config);

let keyRIGHT, keyleft;

let level;

let p1Score;

