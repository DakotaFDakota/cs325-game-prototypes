import Inventory from "./Inventory.js";
import MatterEntity from "./MatterEntity.js";

export default class Player extends MatterEntity {
    constructor(data){
        let{scene, x, y, texture, frame} = data;
        super({...data, health:1, name:'player'});
        this.touching = [];
        this.inventory = new Inventory();
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label:'playerCollider'});
        var playerSensor = Bodies.circle(this.x, this.y, 24, {isSensor:true, label: 'playerSensor'});
        const compoundBody = Body.create({
        parts: [playerCollider, playerSensor],
        frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
        this.setFixedRotation();
        this.CreatePickupCollision(playerCollider);
        this.CreateTouchingCollisions(playerCollider);
        this.spriteWeapon = new Phaser.GameObjects.Sprite(this.scene, 0,0, 'items', 12);
        this.spriteWeapon.setOrigin(0.09, 0.55);
        this.scene.add.existing(this.spriteWeapon);
        this.laserBeam = new Phaser.GameObjects.Sprite(this.scene, 0,0, 'items', 13);
        this.scene.add.existing(this.laserBeam);
        


}   



    static preload(scene){
        scene.load.atlas('pirate', 'assets/pirate.png', 'assets/pirate_atlas.json');
        scene.load.animation('pirate_anim', 'assets/pirate_anim.json');
        scene.load.audio('playerinjur', 'assets/audio/playerinjur.wav')
        scene.load.spritesheet('items', 'assets/items.png', {frameWidth: 32, frameHeight: 32});
        scene.load.image('laserbeam', 'assets/laserbeam.png');
    }

   

    onDeath = () => {
        this.anims.stop();
        this.setOrigin();
        this.spriteWeapon.destroy();
        alert("You have died, refresh to try again :(");


    }

    create(scene) {
        this.laser = scene.add.weapon('laserbeam');
        this.laser.bulletSpeed = 500;
        this.laser.bulletLifespan = 2000;

    }

    update(){

        let pointer = this.scene.input.activePointer;
        if (pointer.isDown){

    }
        if(this.dead) return;
        this.touchStuff();
        if(this.inventory.selectedItem){
            this.spriteWeapon.setTexture('items',this.inventory.getItemFrame(this.inventory.selectedItem));
            this.spriteWeapon.setVisible(true);
        }else {
            this.spriteWeapon.setVisible(false);
        }

        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown) {
            playerVelocity.x = -1;
        } else if (this.inputKeys.right.isDown){
            playerVelocity.x = 1;
        }
        if (this.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        } else if (this.inputKeys.down.isDown){
            playerVelocity.y = 1;
        }
        this.setFlipX(this.velocity.x<0);
        if(this.flipX) {
            this.spriteWeapon.setOrigin(0.91, 0.55);
            this.spriteWeapon.setFlipX(this.velocity.x<0);

        }else {
            this.spriteWeapon.setFlipX(this.velocity.x<0);
            this.spriteWeapon.setOrigin(0.09, 0.55);

        }
        
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x, playerVelocity.y);
        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y > 0.1)){
            this.anims.play('pirate_walk', true);
            this.touchStuff();
        }
        else{
            this.anims.play('pirate_idle', true);
            this.touchStuff();
        }

        this.spriteWeapon.setPosition(this.x,this.y);
        this.laserBeam.setPosition(this.x,this.y);

}

CreateTouchingCollisions(playerSensor){
    this.scene.matterCollision.addOnCollideStart({
      objectA:[playerSensor],
      callback: other => {
        if(other.bodyB.isSensor) return;
        this.touching.push(other.gameObjectB);
      },
      context: this.scene,
    });

    this.scene.matterCollision.addOnCollideEnd({
      objectA:[playerSensor],
      callback: other => {
        this.touching = this.touching.filter(gameObject => gameObject != other.gameObjectB);
      },
      context: this.scene,
    })
  }

CreatePickupCollision(playerCollider) {
    this.scene.matterCollision.addOnCollideStart({
        objectA: [playerCollider],
        callback: other => {
            if(other.gameObjectB && other.gameObjectB.pickup) 
                if(other.gameObjectB.pickup()) this.inventory.addItem({name: "ruby", quantity: 1});//name:other.gameObjectB.name, quantity:1});
        },
        context: this.scene,

    });

    

    this.scene.matterCollision.addOnCollideActive({
        objectA:[playerCollider],
        callback: other => {
            if(other.gameObjectB && other.gameObjectB.pickup) 
            
            if(other.gameObjectB.pickup()) this.inventory.addItem({name:other.gameObjectB.name, quantity:1});
        },
        context: this.scene,
    });

}

touchStuff() {
    this.touching = this.touching.filter(gameObject => gameObject.hit && !gameObject.dead);
    this.touching.forEach(gameobject =>{
        gameobject.hit();
        if(gameobject.dead) gameobject.destroy();
    })

}


}