class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {

        this.playRestart = this.scene.get("playScene");

        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        this.add.text(game.config.width/2, game.config.height/2, "GAME OVER").setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, "YOUR SCORE: " + playScore).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 128, "Spacebar to restart or <- for Menu").setOrigin(0.5);

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            this.playRestart.scene.restart();
            this.scene.start("playScene");
        }

        //press left -> goes to menu screen
        if(Phaser.Input.Keyboard.JustDown(this.keyLEFT)) {
            this.scene.start("menuScene");
        }
    }

}