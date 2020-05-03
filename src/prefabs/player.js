class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        // call Phaser Physics Sprite constructor
        super(game.config.width/8, game.config.height - 100, 'player'); 

        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);       // add physics body
    }

    update() {

        //for 'is the player on the ground'
        this.runner.isGrounded = this.runner.body.touching.down;

        //jumping constriction, no double jumps
        if(this.runner.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
                this.runner.setVelocity(0, -200);
                this.sound.play('jump');
            }
        }
        
    }
}