class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('platform', './assets/platform.png');
        this.load.image('sprite', './assets/sprite.png');
        this.load.image('test_scroll', './assets/test_scroll.png');
        this.load.image('test_background', './assets/test_background.png');

    }
    create() {

    let runner = this.physics.add.group({
        // Initial angular speed of 60 degrees per second.
        // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
        angularDrag: 5,
        angularVelocity:0,
       // bounceX: 1,
        //bounceY: 1,
        collideWorldBounds: true,
        dragX: 50,
        dragY: 50
    });
        //from nathan's movment studies
        this.platform = this.add.group();
        for(let i = 0; i < game.config.width; i += 32) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 32, 'platform').setScale(0.5).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.platform.add(groundTile);
        }
        // put another tile sprite above the ground tiles
        this.testScroll = this.add.tileSprite(0, 0, 740, 32, 'test_scroll').setOrigin(0, 0);

        this.testBackground = this.add.tileSprite(0, 0, 740, 480, 'test_background').setOrigin(0, 0);

        this.runner = runner.create(game.config.width/8, game.config.height - 100, 'sprite');

        //adding gravity
        this.runner.setGravityY(200);

        //interaction between the runner and the ground, collision
        //this.testPlatform.setImmovable();
        this.physics.add.collider(this.runner, this.platform);

       //keyf = this.input.keyboard.addKey(Phaser.Input.Keyboard.Keycodes.F);
       //this.input.on('pointerdown', this.jump, this);

        this.input.keyboard.on('keydown', () => {
        this.runner.setVelocity(0, -200);
    }, this);

    }
    update() {

        this.testScroll.tilePositionX += 2;
        this.testBackground.tilePositionX += 2;
        
        //if(keyF.isDown) {
        //   this.runner.body.velocity.y = -100;
       // }
        
    }
    /*jump() {
        this.runner.setVelocity(-100);
            //negative goes up
    }*/

}