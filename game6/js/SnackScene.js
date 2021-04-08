export default class SnackScene extends Phaser.Scene{
    constructor(){
        super("SnackScene");
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
        this.titletext = this.add.text(50,150,"The snacks are safe and heal", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "all players to full health.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Stay", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("StayScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("MainScene", {cb: this.crowbar}));
    }


    update(){}
}