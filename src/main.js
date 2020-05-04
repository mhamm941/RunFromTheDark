/*
    Run From The Dark - Endless Runner
    Authors - Amber Vo, Matthew Hamm, Petr Luzunov
    
    CREATIVE TILT
    Technical - We implimented a "life" feature that tracks how close you are to the end of the game. 
                When you hit an obstacle, the darkness grows closer and when you clear one the darkness gets fainter.

    Artistic  - Matt designed all the sounds and the music in our game. This was his first time doing this 
                kind of sound design where he messed with distortion waveforms for the sound of the light switch and 
                used the chrome music lab to create the background music. Amber and Petr collaborated to create the 
                visuals for the game, keeping a haunting and cartoony style.
*/

let config = {
   // parent: 'myGame',
    type: Phaser.WEBGL,
    width: 740,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [music, menu, opening, play, gameOver]
};


let game = new Phaser.Game(config);

let level;

let spaceBare;

let lifeTracker;
let scoreLeft;

let playScore;
let displayScore;

