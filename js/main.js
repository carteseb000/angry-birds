let config = {
    type: Phaser.AUTO,
    width: window.screen.width,
    height: window.screen.height,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [ Scene1 ]
};
let game = new Phaser.Game(config);