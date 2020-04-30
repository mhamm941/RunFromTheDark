class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('opening1', '.assets/openingScene1.png');
    }

    create() {

        this.opening1 = this.add.tileSprite(0, 0, 740, 480, 'openingScene1').setOrigin(0, 0);;

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, game.config.width/2, "Press any key to continue").setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("openingScene");
        }, this);
    }

}