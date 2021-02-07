import Player from "./Player.js"

export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
    }

    preload(){
        Player.preload(this);
        this.load.image('tiles', 'assets/tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
      }

    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('tileset', 'tiles', 32,32,0,0);
        const layer1 = map.createStaticLayer('Tile Layer 1', tileset,0,0);
        const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0,0);
        layer1.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer1);
        layer2.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer2);
        this.player = new Player({scene: this, x: 80,y: 90, texture: 'pirate', frame: 'pirate_idle_1'});
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    update(){
    this.player.update()

    }
}
