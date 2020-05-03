class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('opening1', './assets/openingScene1.png');
        this.load.audio('switch', './assets/switch.wav')
    }

    create() {

        this.opening1 = this.add.tileSprite(0, 0, 740, 480, 'opening1').setOrigin(0, 0);;

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, 20, "Run From the Dark", {
            fontFamily: 'darkPoestry',
            fontSize: '40px',
        }).setOrigin(0,0);
        this.add.text(game.config.width/2 + 64, 80, "press any key to continue",{
            fontFamily:'darkPoestry',
            fontSize: '20px'
        })
        this.input.keyboard.on('keydown', () => {
            this.scene.start("openingScene");
            this.sound.play('switch');
        }, this);
    }

}