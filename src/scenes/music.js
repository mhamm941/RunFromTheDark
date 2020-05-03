class music extends Phaser.Scene {
    constructor() {
        super("musicScene");
    }
    preload() {
        this.load.audio('bgMusic', './assets/RftD.wav');
    }
    create() {
        let bgMusic = this.sound.add('bgMusic');
        bgMusic.play({
            loop: true,
            volume: .75,
        });
        this.scene.start("menuScene");
    }
}