import MatterEntity from "./MatterEntity.js";

export default class Player extends MatterEntity {
    constructor(data){
        let{scene, x, y, texture, frame} = data;
        super({...data, health: 2, name:'player'});
        this.touching = [];
    
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label:'playerCollider'});
        var playerSensor = Bodies.circle(this.x, this.y, 24, {isSensor:true, label: 'playerSensor'});
        const compoundBody = Body.create({
        parts: [playerCollider, playerSensor],
        frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
        this.CreateLaserCollision(playerCollider);
        this.setFixedRotation();
}   
    static preload(scene){
        scene.load.atlas('pirate', 'assets/pirate.png', 'assets/pirate_atlas.json');
        scene.load.animation('pirate_anim', 'assets/pirate_anim.json');
        scene.load.audio('playerinjur', 'assets/audio/playeyinjur.wav')
    }


    update(){
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
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x, playerVelocity.y);
        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y > 0.1)){
            this.anims.play('pirate_walk', true);
        }
        else{
            this.anims.play('pirate_idle', true);
        }

        //fireWeapon() {
            //let pointer = this.scene.input.activePointer;
            //if(pointer.isDown) {
                //fireweapon
           // }else{
                //stopfire
            //}

        //}

}

CreateLaserCollision(playerCollider) {
    this.scene.matterCollision.addOnCollideStart({
        objectA: [playerCollider],
        callback: other => {
            if(other.gameObjectB && other.gameObjectB.pickup) other.gameObjectB.pickup();
        },
        context: this.scene,

    });

    this.scene.matterCollision.addOnCollideEnd({
        objectA:[playerCollider],
        callback: other => {
            if(other.gameObjectB && other.gameObjectB.pickup) other.gameObjectB.pickup();
        },
        context: this.scene,
    });

}

}