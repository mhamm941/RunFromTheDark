class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        // call Phaser Physics Sprite constructor
        super(scene, x, y, texture); 

        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);   
        
        //setting gravity
        this.setGravityY(300);
        this.setDragX(50);
        this.setDragY(50);
        this.setScale(2.5);

    }

    update() {

        //for 'is the player on the ground'
      /*  this.runner.isGrounded = this.runner.body.touching.down;

        //jumping constriction, no double jumps
        if(this.runner.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
                this.runner.setVelocity(0, -200);
                this.sound.play('jump');
            }
        }*/
        
    }
}