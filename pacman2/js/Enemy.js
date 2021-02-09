import MatterEntity from "./MatterEntity.js";

export default class Enemy extends MatterEntity {

    

    constructor(data){
        let {scene} = data;
        super({...data, texture:'knight', frame: 'knight_idle_1', health: 2, name: 'knight'});
        //let health = this.properties.find(p=>p.name=='health').value;
        this.scene.add.existing(this);
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var enemyCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label:'enemyCollider'});
        var enemySensor = Bodies.circle(this.x, this.y, 80, {isSensor:true, label: 'enemySensor'});
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

    //function patrol() {
      //  this.setVelocityX((Math.random(Math.random) * 2-1));
      //  this.setVelocityY((Math.random(Math.random) * 2-1));
    //}

    

    update(){
        var x = Array(-2, -3, -4, -5, 2, 3, 4, 5);
        var y = Array(-2, -3, -4, -5, 2, 3, 4, 5);

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
            const speed = 2.5;
            let enemyVelocity = new Phaser.Math.Vector2();
            enemyVelocity.x = Math.random() * 2 - 1;
            enemyVelocity.y = Math.random() * 2 - 1;

            enemyVelocity.normalize();
            enemyVelocity.scale(speed);
            this.setVelocity(enemyVelocity.x, enemyVelocity.y);


            //let i = 0;
            //var x1 = x[Math.floor(Math.random() * x.length)];
            //var y1 = y[Math.floor(Math.random() * y.length)];
            //for (let i = 0; i < (Math.random() * (140 - 100) + 100); i++) {
                //console.log(i);
                //this.setVelocityX(x1+1);

              //  this.setVelocityY(y1+1);
           // };
            //do {
                //i = i + 1;
                //console.log(i);
                //this.setVelocityX(x);
                //this.setVelocityY(y);
            //} while (i < (Math.random() * (900 - 50) + 500));
            //let direction = this.position.subtract(Math.random() * (2 - 1) + 1, Math.random() * (2 - 1) + 1);
            //let v = direction.normalize();
            //this.setVelocityX(direction.x);
            //this.setVelocityY(direction.y);

            //let stepLimit = 100;
            //this.stepCount = (Math.random() * (stepLimit - 0));
            //console.log(this.stepCount);
            //delay(1);
            //(Math.random() * (20 - 10) + 10) * (Math.random(Math.random) * 2-1));
        }




        //const speed = 2.5;
        //let enemyVelocity = new Phaser.Math.Vector2();
        //enemyVelocity.normalize();
        //enemyVelocity.scale(speed);
        //this.setVelocity(enemyVelocity.x, enemyVelocity.y);
        this.setFlipX(this.velocity.x<0);

        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y > 0.1)){
            this.anims.play('knight_walk', true);
        }
        else{
            this.anims.play('knight_idle', true);
        }

}

}