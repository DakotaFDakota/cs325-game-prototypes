export default class RightScene extends Phaser.Scene{
    constructor(){
        super("RightScene");
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
        this.titletext = this.add.text(50,150,"You see an escalator that is", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "running and a set of stairs.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Go up the escalator", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Go up the steps", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("EscalatorScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
    }


    update(){}
}