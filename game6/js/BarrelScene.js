export default class BarrelScene extends Phaser.Scene{
    constructor(){
        super("BarrelScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let crowbar;
    }

    preload(){}

    init(data){
        this.crowbar = data.cb;
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        //this.crowbar = 1;
        if(this.crowbar === 1){
            this.titletext = this.add.text(50,150,"You open the barrels to find they", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "they are filled with pretzels that", {font: "20px Courier"})
            this.titletext2 = this.add.text(50, 190, "appear to be freshly baked", {font: "20px Courier"})
            this.option1 = this.add.text(50, 240, "Eat the pretzel", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 270, "Leave", {font: "20px Courier"});
            this.option2.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("EatPretzelScene", {crowbar: this.crowbar}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {crowbar: this.crowbar}));
        }
        else {
            this.titletext = this.add.text(50,150,"You are unable to open the barrels", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "with your bear hands.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 220, "Try again", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 250, "Leave", {font: "20px Courier"});
            this.option2.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("BarrelScene", {cb: this.crowbar}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
        }
    }


    update(){}
}