class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('platform', './assets/platform.png');
        this.load.image('sprite', './assets/sprite.png');
        this.load.image('test_scroll', './assets/test_scroll.png');
        this.load.image('test_background', './assets/test_background.png');
        this.load.image('obstacle', './assets/obstacle.png');

    }
    create() {

        this.obstacleSpeed = -200;
        //this.objectFlag = false;

    let runner = this.physics.add.group({
        // Initial angular speed of 60 degrees per second.
        // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
        angularDrag: 0,
        angularVelocity:0,
       // bounceX: 1,
        //bounceY: 1,
        collideWorldBounds: true,
        dragX: 50,
        dragY: 50
    });
        //from nathan's movement studies
        this.platform = this.add.group();
        for(let i = 0; i < game.config.width; i += 32) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 32, 'platform').setScale(0.5).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.platform.add(groundTile);
        }
        // put another tile sprite above the ground tiles
        this.testBackground = this.add.tileSprite(0, 0, 740, 480, 'test_background').setOrigin(0, 0);

        this.testScroll = this.add.tileSprite(0, 448, 740, 32, 'test_scroll').setOrigin(0, 0);

        this.runner = runner.create(game.config.width/8, game.config.height - 100, 'sprite');

        //adding gravity
        this.runner.setGravityY(300);

        //interaction between the runner and the ground, collision
        this.physics.add.collider(this.runner, this.platform);

                this.p1Score = 0;
                this.scoreLeft = this.add.text(69, 54, this.p1Score, scoreConfig);

       //keyf = this.input.keyboard.addKey(Phaser.Input.Keyboard.Keycodes.F);
       //this.input.on('pointerdown', this.jump, this);

        this.input.keyboard.on('keydown', () => {
        this.runner.setVelocity(0, -200);
    }, this);

        this.obstacleGroup = this.add.group({
            runChildUpdate: true
        });
        this.addObstacles();

        this.physics.add.overlap(runner, this.obstacleGroup, this.check, null, this);

    }

    update() {
        this.testScroll.tilePositionX += 3;
        this.testBackground.tilePositionX += 3;

    /////////line 43 in play.js of paddle parkour
    ///////line 77 function level bump
    }
    addObstacles() {
        let obstacleObject = new obstacle(this, this.obstacleSpeed);     // create new barrier //obstacle speed --> make global vaiable --> in main
        this.obstacleGroup.add(obstacleObject);            // add it to existing group
    }

    check(obstacleGroup) {
        console.log('hit');

        obstacleGroup.destroy();

        this.p1Score += 1;
        this.scoreLeft.text = this.p1Score;
    }

}