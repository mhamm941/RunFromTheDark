class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
       // this.load.image('platform', './assets/platform.png');
        this.load.image('sprite', './assets/sprite.png');
        this.load.image('test_platform', './assets/test_platform.png');
    }
    create() {

        //this.platform = this.add.tileSprite(0, 0, 640, 480, 'platform').setOrigin(0, 0);
        this.testPlatform = this.physics.add.sprite(game.config.width/2, game.config.height/2 + 150, 'test_platform').setScale(0.5);

        this.runner = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'sprite').setScale(0.5);

        //adding gravity
        this.runner.setGravityY(100);

        //interaction between the runner and the ground, collision
        this.testPlatform.setImmovable();
        this.physics.add.collider(this.runner, this.testPlatform);

       // keyf = this.input.keyboard.addKey(Phaser.Input.Keyboard.Keycodes.F);
 
    }
    update() {
        //this.platform.tilePositionX += 2;

        if(keyF.isDown) {
            this.runner.body.velocity.y = -100;
        }
        
    }

}