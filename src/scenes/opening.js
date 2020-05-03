class opening extends Phaser.Scene {
    constructor() {
        super("openingScene");
    }

    preload() {
        this.load.image('opening2', './assets/openingScene2.png');

        this.load.audio('select', './assets/select.wav');
    }

    create() {
        //font
        let menuConfig = {
            fontFamily: 'darkPoestry',
            fontSize: '30px',
            fixedWidth: 0
        }

        this.opening2 = this.add.tileSprite(0, 0, 740, 480, 'opening2').setOrigin(0,0);

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, game.config.height/2 +64, "Press SPACEBAR to jump", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +128, "Gain points as you run", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +192, "-20 points when you hit an obstacle", menuConfig).setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
            this.sound.play('select');
        }, this);
    }

}