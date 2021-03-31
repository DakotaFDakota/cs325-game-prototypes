export default class StraightScene extends Phaser.Scene{
    constructor(){
        super("StraightScene");
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
        this.titletext = this.add.text(50,150,"A loud crashing sound can be heard", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "from ahead.  Suddenly, an old man", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "walks out wearing a bear pelt holding", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "a bloodied knife.  He looks towards", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 230, "your group.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 280, "Approach the Old Man", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 310, "Run Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("OldManScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("ShoeStoreScene", {cb: this.crowbar}));

    }


    update(){}
}