class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {

        this.load.atlas('runner_atlas', './assets/runner_sheet.png', './assets/running.json');

        this.load.image('groundScroll', './assets/test_scroll.png');
        this.load.image('background', './assets/background.png');
        this.load.image('dark0', './assets/dark0.png');
        this.load.image('dark1', './assets/dark-1.png');
        this.load.image('dark2', './assets/dark-2.png');

        this.load.image('legos', './assets/Legos.png');
        this.load.image('chair', './assets/Chair.png');
        this.load.image('laundry', './assets/Laundry.png');
        this.load.image('bin', './assets/Trashbin.png')

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');

    }
    create() {

        this.gameEnd = false;
        this.obstacleSpeed = -250;
        this.maxSpeed = -600;
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        level = 0;

        this.runnerGroup = this.add.group();

        //from nathan's movement studies
        this.platform = this.add.group();
        for(let i = 0; i < game.config.width; i += 32) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 100, 'groundScroll').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.platform.add(groundTile);
        }
        // put another tile sprite above the ground tiles
        this.background = this.add.tileSprite(0, 0, 740, 480, 'background').setOrigin(0, 0);

        this.groundScroll = this.add.tileSprite(0, 380, 740, 100, 'groundScroll').setOrigin(0, 0);

        this.anims.create({
            key: 'runningKey',
            frameRate: 5,
            frames: this.anims.generateFrameNames('runner_atlas', {
                prefix: 'running',
                start: 1,
                end: 6,
                zeropad: 1,
                suffix: '.png',
            }),
            repeat: -1, //-1 for infinite repeat
        });
        this.runner = new player(this, game.config.width/8, game.config.height - 210, 'runner_atlas', 'running1.png');
        this.runner.play('runningKey');
        this.runnerGroup.add(this.runner, true);

        //interaction between the runner and the ground, collision
        this.physics.add.collider(this.runnerGroup, this.platform);

        //display score for debugging
        lifeTracker = 0;

        playScore = 0;

        displayScore = this.add.text(game.config.width/2 + game.config.width/3, 54, playScore, {
            fontFamily: 'darkPoestry',
            fontSize: '40px',
            color: '#000000',
        }).setOrigin(0,0);


        this.obstacleGroup = this.add.group({
            runChildUpdate: true
        });
        this.addObstacles();

        //overlap with between the player and obstacle
        this.physics.add.overlap(this.obstacleGroup, this.runnerGroup, this.check, null, this);

        //darkLevel = 0;
        this.darkness = this.add.tileSprite(0, 0, 740, 480, 'dark0').setOrigin(0, 0);

        //from nathan's paddle parkour --> for the level bumping
        let difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.levelBump,
            callbackScope: this,
            loop: true
        });
        let scoreTimer = this.time.addEvent({
            delay: 100,
            callback: this.scoreIncrease,
            callbackScope: this,
            loop: true
        });
    }

    update() {

        this.groundScroll.tilePositionX += 5;
        this.background.tilePositionX += 5;

        //for 'is the player on the ground'
        this.runner.isGrounded = this.runner.body.touching.down;
            //no double jumps
        if(this.runner.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            this.runner.setVelocity(0, -250);
            this.sound.play('jump');
            }
        }
        //this.darkness = this.stepDarkness();
        //if the player touches the obstacle 3 times in a row, game over
        //player gets engulfed by the dark
        if(lifeTracker == -3){
            this.gameEnd = true;
            this.scene.start('gameOverScene');
        }
        
    }

    addObstacles() {
        let objectAssign;
    
        let obstacleObject;

        objectAssign = Math.floor(Math.random() * 4) + 1;

        if(objectAssign == 1) {
            obstacleObject = new obstacle(this, this.obstacleSpeed, 'legos');
        }
        else if(objectAssign == 2) {
            obstacleObject = new obstacle(this, this.obstacleSpeed, 'chair');
        }
        else if(objectAssign == 3) {
            obstacleObject = new obstacle(this, this.obstacleSpeed, 'laundry');
        }  
        else if(objectAssign == 4) {
            obstacleObject = new obstacle(this, this.obstacleSpeed, 'bin');
        } 
        this.obstacleGroup.add(obstacleObject);            // add it to existing group
    }

    check(obstacleGroup) {
        console.log('hit');

        obstacleGroup.destroy();

        this.sound.play('hurt');

        lifeTracker -= 1;
        playScore -=20;
        this.stepDarkness();
        //scoreLeft.text = lifeTracker;
    }

    //level bump from Nathan's paddle parkour code
    levelBump() {

        level++;

        // bump speed every 5 levels
        if(level % 7 == 0) {
            console.log(`level: ${level}, speed: ${this.obstacleSpeed}`); 
            if(this.obstacleSpeed >= this.maxSpeed) {     // increase barrier speed
                this.obstacleSpeed -= 25;
            }
        }
    }

    scoreIncrease() {
        playScore ++;
        displayScore.text = playScore;
    }

    stepDarkness() {
        if(lifeTracker == 0){
            this.darkness.destroy();
            this.darkness = this.add.tileSprite(0, 0, 740, 480, 'dark0').setOrigin(0, 0);
            
        }
        if(lifeTracker == -1){
            this.darkness.destroy();
            this.darkness = this.add.tileSprite(0, 0, 740, 480, 'dark1').setOrigin(0, 0);
            
        }
        if(lifeTracker == -2){
            this.darkness.destroy();
            this.darkness = this.add.tileSprite(0, 0, 740, 480, 'dark2').setOrigin(0, 0);
            
        }
    }
}