class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        // call Phaser Physics Sprite constructor
        super(scene, x, y, texture); 

        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);   
        
        //setting gravity
        this.setGravityY(400);
        this.setDragX(50);
        this.setScale(2.5);

    }
}