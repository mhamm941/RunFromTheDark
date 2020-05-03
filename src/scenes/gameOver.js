class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'darkPoestry',
            fontSize: '40px',
            fixedWidth: 0
        }

        this.playRestart = this.scene.get("playScene");

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        this.add.text(game.config.width/2, game.config.height/2 -64, "GAME OVER", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "YOUR SCORE: " + playScore, menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +64, "R to restart", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +128, "M to go to the Menu", menuConfig).setOrigin(0.5);

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keyR)) {
            this.playRestart.scene.restart();
            this.scene.start("playScene");
        }

        //press left -> goes to menu screen
        if(Phaser.Input.Keyboard.JustDown(this.keyM)) {
            this.scene.start("menuScene");
        }
    }

}