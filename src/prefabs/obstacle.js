//prefabs from nathan

class obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity, texture) {
        // call Phaser Physics Sprite constructor
        super(scene, game.config.width + 32, game.config.height - 48, texture); 
        // set up physics sprite
        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);       // add physics body
        this.setVelocityX(velocity);            // make it go!
        this.setImmovable();                    
        this.newObstacle = true;                 // custom property to control barrier spawning

        this.scene = scene;
        this.velocity = velocity;
    }

    update() {
        // override physics sprite update()
        super.update();

        this.randNumber = Math.floor(Math.random() * 300);
        this.randSpawn = Math.floor(Math.random() * 4) + 1;

        if(this.randSpawn % 2 != 0) {
        // add new barrier when existing barrier hits center X
        if(this.newObstacle && this.x < this.randNumber) { // -------> this.newObstacle, when making new obstacle --> 
            this.newObstacle = false;               //every new obstacle is made with this new property
                                        //if the new obstacle is true and it passes the half way mark then it goes into the if statement
                                        //after it passes halfway, no longer an obstacle --> dont mistake it for new obstacle --> dont want to spawn it multiple times
                                        //--> in this scene
                                        //centerX can be changed so that it doesnt have to be the cneeter
            // call parent scene method from this context
            this.scene.addObstacles(this.parent, this.velocity); 
        }
    }

        // destroy paddle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
            console.log('destroyed off screen');
            playScore += 50;
            displayScore.text = playScore;
            //gives the player the ability to recover --> get away from the darkness
            if(p1Score < 0){
                p1Score += 1;
                //scoreLeft.text = p1Score;
            }

        }
    }
}