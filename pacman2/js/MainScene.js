import Enemy from "./Enemy.js";
import Player from "./Player.js";
import Gun from "./Gun.js";

export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
    }

    preload(){
        Player.preload(this);
        Enemy.preload(this);
        Gun.preload(this);
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
        this.knight1 = new Enemy({scene: this, x: 263,y: 320, texture: 'knight', frame: 'knight_idle_1'});
        this.knight2 = new Enemy({scene: this, x: 234,y: 320, texture: 'knight', frame: 'knight_idle_1'});
        this.knight3 = new Enemy({scene: this, x: 234,y: 290, texture: 'knight', frame: 'knight_idle_1'});
        this.knight4 = new Enemy({scene: this, x: 263,y: 290, texture: 'knight', frame: 'knight_idle_1'});
        this.gun = new Gun({scene: this, x: 350,y: 350, texture: 'laser'});

    }

    update(){
    this.player.update();
    //this.knight.forEach(knight => knight.update());
    this.knight1.update();
    this.knight2.update();
    this.knight3.update();
    this.knight4.update();
    }

}
