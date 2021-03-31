export default class SurvivalScene extends Phaser.Scene{
    constructor(){
        super("SurvivalScene");
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
        if(this.crowbar === 1){
            this.titletext = this.add.text(50,150,"The store has broken glass on the", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "floor, with a skeleton. You", {font: "20px Courier"})
            this.titletext2 = this.add.text(50, 190, "already grabbed the crowbar.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 240, "Stay", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 270, "Walk Away", {font: "20px Courier"});
            this.option2.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("SurvivalScene", {cb: this.crowbar}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
        }
        else{
            this.titletext = this.add.text(50,150,"The store has broken glass on the", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "floor, with a skeleton holding", {font: "20px Courier"})
            this.titletext2 = this.add.text(50, 190, "a crowbar.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 240, "Grab the crowbar", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 270, "Walk Away", {font: "20px Courier"});
            this.option2.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("CrowbarScene", {cb: this.crowbar}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
        }
    }


    update(){}
}