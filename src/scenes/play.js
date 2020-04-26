class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('platform', './assets/platform.png');
        this.load.image('sprite', './assets/sprite.png');
        this.load.image('test_platform', './assets/test_platform.png');
    }
    create() {

    //this.platform = this.add.tileSprite(0, 0, game.config.width, game.config.height/2 + 150, 'platform').setOrigin(0);
  //this.testPlatform = this.physics.add.sprite(game.config.width/2, game.config.height/2 + 150, 'test_platform');

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
        this.platformScroll = this.add.tileSprite(0, game.config.height-32, game.config.width, 32, 'platform').setOrigin(0);


        this.runner = runner.create(game.config.width/8, game.config.height/2, 'sprite');

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

        this.platformScroll.tilePositionX += 2;
        
        //if(keyF.isDown) {
        //   this.runner.body.velocity.y = -100;
       // }
        
    }
    /*jump() {
        this.runner.setVelocity(-100);
            //negative goes up
    }*/

}