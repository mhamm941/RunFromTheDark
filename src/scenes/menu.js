class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('opening1', './assets/openingScene1.png');

        this.load.audio('select', './assets/select.wav');
    }

    create() {

        this.opening1 = this.add.tileSprite(0, 0, 740, 480, 'opening1').setOrigin(0, 0);;

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, game.config.height/2, "Run From the Dark").setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("openingScene");
            this.sound.play('select');
        }, this);
    }

}