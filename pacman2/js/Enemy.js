import MatterEntity from "./MatterEntity.js";

export default class Enemy extends MatterEntity {

    

    constructor(data){
        let {scene} = data;
        super({...data, texture:'knight', frame: 'knight_idle_1', health: 1000, name: 'knight'});
        this.scene.add.existing(this);
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var enemyCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label:'enemyCollider'});
        var enemySensor = Bodies.circle(this.x, this.y, 60, {isSensor:true, label: 'enemySensor'});
        const compoundBody = Body.create({
        parts: [enemyCollider, enemySensor],
        frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
        this.setFixedRotation();
        this.scene.matterCollision.addOnCollideStart({
            objectA:[enemySensor],
            callback: other => {if(other.gameObjectB && other.gameObjectB.name == 'player') this.attacking = other.gameObjectB;},
            context: this.scene,
        });    
    }   

    static preload(scene){
        scene.load.atlas('knight', 'assets/knight.png', 'assets/knight_atlas.json');
        scene.load.animation('knight_anim', 'assets/knight_anim.json');
    }


    attack = (target) => {
        if(target.dead || this.dead) {
            clearInterval(this.attacktimer);
            return;
        }
        target.hit();
    }

    update(){
        if(this.dead) return;
        if(this.attacking){
            let direction = this.attacking.position.subtract(this.position);
            
            if(direction.length()>24) {
                let v = direction.normalize();
                this.setVelocityX(direction.x);
                this.setVelocityY(direction.y);
                if(this.attacktimer) {
                    clearInterval(this.attacktimer);
                    this.attacktimer = null;
                }
            } else {
                if(this.attacktimer == null) {
                    this.attacktimer = setInterval(this.attack, 500, this.attacking);

                }
            }

        } else {
            var x1 = 255;
            var y1 = 275;
            let direction = this.position.subtract({x:x1,y:y1});
                let v = direction.normalize();
                this.setVelocityX(direction.x);
                this.setVelocityY(direction.y);
        }
        this.setFlipX(this.velocity.x<0);

        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y > 0.1)){
            this.anims.play('knight_walk', true);
        }
        else{
            this.anims.play('knight_idle', true);
        }

}

hit = ()=>{
    this.health--;
    if(this.dead){
        this.drops.forEach(drop => new DropItem({scene:this.scene, x:this.x, y:this.y, frame:drop}));


    }
}

}