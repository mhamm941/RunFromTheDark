class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

       /* let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            //backgroundColor: '#F3B141',
            color: '#ffda82',
            aligh: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }*/

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(0, 0, "Press any key to continue").setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
        }, this);
    }

}