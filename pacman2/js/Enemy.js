import MatterEntity from "./MatterEntity.js";

export default class Enemy extends MatterEntity {

    

    constructor(data){
        let {scene} = data;
        super({...data, texture:'knight', frame: 'knight_idle_1', health: 2, name: 'knight'});
        //let health = this.properties.find(p=>p.name=='health').value;
        this.scene.add.existing(this);
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var enemyCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label:'enemyCollider'});
        var enemySensor = Bodies.circle(this.x, this.y, 24, {isSensor:true, label: 'enemySensor'});
        const compoundBody = Body.create({
        parts: [enemyCollider, enemySensor],
        frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
        this.setFixedRotation();
}   
    
    static preload(scene){
        scene.load.atlas('knight', 'assets/knight.png', 'assets/knight_atlas.json');
        scene.load.animation('knight_anim', 'assets/knight_anim.json');
    }


    update(){
        const speed = 2.5;
        let enemyVelocity = new Phaser.Math.Vector2();
        enemyVelocity.normalize();
        enemyVelocity.scale(speed);
        this.setVelocity(enemyVelocity.x, enemyVelocity.y);
        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y > 0.1)){
            this.anims.play('knight_walk', true);
        }
        else{
            this.anims.play('knight_idle', true);
        }

}

}