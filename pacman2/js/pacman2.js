import InventoryScene from "./InventoryScene.js";
import MainScene from "./MainScene.js";

const config = {
    width: 512,
    height: 512,
    backgroundColor: '#333333',
    type: Phaser.ARCADE,
    parent: 'pacman2',
    scene: [MainScene, InventoryScene],
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