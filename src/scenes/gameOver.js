class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {

        //this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2 + 64, '-> to restart or <- for Menu', scoreConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/2, "GAME OVER").setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, "-> to restart or <- for Menu").setOrigin(0.5);

    }

    update() {
        if(this.gameEnd && Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.restart(this.p1Score);
        }

        //press left -> goes to menu screen
        if(this.gameEnd && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
    }

}