export default class StairsScene extends Phaser.Scene{
    constructor(){
        super("StairsScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let option3;
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
        this.titletext = this.add.text(50,150,"At the top there is an Uncle", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "Rodney's Pretzel Store and", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "a Mike's Surival Store.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Enter Pretzel Store", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Enter Survival Store", {font: "20px Courier"});
        this.option2.setInteractive();
        this.option3 = this.add.text(50,300, "Continue Straight", {font: "20px Courier"});
        this.option3.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("PretzelScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("SurvivalScene", {cb: this.crowbar}));
        this.option3.on('pointerdown', () => this.scene.start("StraightScene", {cb: this.crowbar}));

    }


    update(){}
}