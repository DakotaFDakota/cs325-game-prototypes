import MainScene from "./MainScene.js";

const config = {
    width: 512,
    height: 512,
    backgroundColor: '#000000',
    type: Phaser.ARCADE,
    parent: 'game2',
    scene: [MainScene],
    scale: {
        zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity:{y:0},
        }
    },
    plugins: {
        scene: [
         {
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision'
         }
        ]
    }
}

new Phaser.Game(config);

