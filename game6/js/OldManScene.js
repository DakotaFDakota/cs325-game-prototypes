export default class OldManScene extends Phaser.Scene{
    constructor(){
        super("OldManScene");
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
        this.titletext = this.add.text(50,150,"The Old Man heals your wounds. He", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "warns your group of the Dana Pretzel", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "tribe, the tribe who controls the food", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "in the mall. He warns your group to", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 230, "avoid foods that are not packaged as", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 250, "it may have been poisoned.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 300, "Thank the Old Man and continue", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 330, "Stay with the Old Man", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("ShoeStoreScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("StayOldManScene", {cb: this.crowbar}));

    }


    update(){}
}