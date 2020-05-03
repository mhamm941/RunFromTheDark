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
        this.randSpawn = Math.floor(Math.random() * 3) + 1;

        if(this.randSpawn % 2 != 0) {
        // add new barrier when existing barrier hits center X
            if(this.newObstacle && this.x < this.randNumber) {
                this.newObstacle = false;             
                this.scene.addObstacles(this.parent, this.velocity); 
            }
            else {
                return false;
            }
        }

        // destroy obstacle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            if(lifeTracker < 0){
                lifeTracker += 1;
                
                this.scene.stepDarkness();
                //scoreLeft.text = lifeTracker;
            }
            this.destroy();
            console.log('destroyed off screen');
            
            //playScore += 50;
            //displayScore.text = playScore;
            //gives the player the ability to recover --> get away from the darkness
        }
    }
}