export default class Gun extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let{scene, x, y, texture, frame} = data;
        super(scene.matter.world, x, y, texture);
        this.scene.add.existing(this);
        const {Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x, this.y, 10, {isSensor: false, label: 'collider'});
        this.setExistingBody(circleCollider);
        this.setFrictionAir(1);
        //this.sound = this.scene.add('shooting');
        //this.name = gun;
}   
    static preload(scene){
        scene.load.image('laser', 'assets/laser.png',);
    }

    pickup = () => {
        this.destroy();
        //this.sound.play();
        return true;
    }

}