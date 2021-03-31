export default class LeftScene extends Phaser.Scene{
    constructor(){
        super("LeftScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
    }

    preload(){}

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,150,"To your left you see a group of", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "raccoons, possibly rabid.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Approach the raccoons looking for food", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Leave the raccoons", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("ApproachRaccoonsScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("MainScene", {cb: this.crowbar}));
    }


    update(){}
}