export default class StayOldManScene extends Phaser.Scene{
    constructor(){
        super("StayOldManScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let crowbar;
    }

    init(data){
        this.crowbar = data.cb;
    }

    preload(){}

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,150,"The Old Man has healed your wounds,", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "why are you still here?", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Stay with Old Man", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Continue", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("StayOldManScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("ShoeStoreScene", {cb: this.crowbar}));

    }


    update(){}
}