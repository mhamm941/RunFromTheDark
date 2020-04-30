class opening extends Phaser.Scene {
    constructor() {
        super("openingScene");
    }

    preload() {
        this.load.image('opening2', './assests/openingScene2.png');
    }

    create() {

        this.opening2 = this.add.tileSprite(0, 0, 740, 480, 'opening2').setOrigin(0,0);

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, game.config.width/2, "Press any key to continue").setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
        }, this);
    }

}