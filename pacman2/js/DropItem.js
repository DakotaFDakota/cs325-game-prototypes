export default class DropItem extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let {scene, name, x, y, frame} = data;
        super(scene.matter.world,x,y, 'items',frame);
        this.scene.add.existing(this);
        const {Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label: 'collider'});
        this.setExistingBody(circleCollider);
        this.setFrictionAir(1);
        
        this.setStatic(true);
        this.name = name;
    }


    pickup = () => {
        this.destroy();
        //console.log("item pickup");
        //this.sound.play();
        return true;
    }
}
