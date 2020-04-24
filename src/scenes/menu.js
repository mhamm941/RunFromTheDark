class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(game.config.width/2, game.config.width/2, "Press any key to continue").setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
        }, this);
    }

}