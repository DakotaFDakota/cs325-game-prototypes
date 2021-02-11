import DropItem from "./DropItem.js";

export default class Resource extends Phaser.Physics.Matter.Sprite {
    static preload(scene){
        scene.load.atlas('resources', 'assets/resources.png', 'assets/resources_atlas.json');
    }

    constructor(data){
        let {scene,resource} = data;
        super(scene.matter.world, resource.x, resource.y,'resources', resource.type);
        this.scene.add.existing(this);
        this.drops = JSON.parse(resource.properties.find(p=>p.name=='drops').value);
        this.name = resource.type;
        this.health = 1;
        
        const {Body, Bodies} = Phaser.Physics.Matter.Matter; 
        var circleCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label: 'collider'});
        this.setExistingBody(circleCollider);        
        this.setStatic(true);
    }

    get dead() {
        return this.health <= 0;
        

    }

    hit = ()=>{
        this.health--;
        if(this.dead){
            this.drops.forEach(drop => new DropItem({scene:this.scene, x:this.x, y:this.y, frame:drop}));


        }
    }
   
}