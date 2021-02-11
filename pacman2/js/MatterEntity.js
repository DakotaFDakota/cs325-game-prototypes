export default class MatterEntity extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let {name, scene, x, y, health, texture, frame, depth} = data;
        super(scene.matter.world,x, y, texture, frame);
        this.x += this.width/2;
        this.y -= this.width/2;
        this.depth = depth || 1;
        this.name = name;
        this.health = health;
        this._position = new Phaser.Math.Vector2(this.x, this.y)
        this.scene.add.existing(this);
    }

    get position() {
        this._position.set(this.x, this.y);
        return this._position;

    }
    
    get velocity(){
        return this.body.velocity;
    }

    get dead() {
        return this.health <= 0;
    }

    onDeath = () => {};

    hit = ()=> {
      if(this.sound) this.sound.play();
         this.health--;
        if(this.dead){  
            this.onDeath();
        }

    }
}