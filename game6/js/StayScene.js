export default class StayScene extends Phaser.Scene{
    constructor(){
        super("StayScene");
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
        this.titletext = this.add.text(50,150,"Do you really want to stay?", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "The raccoons may come back and", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "you did steal their snacks.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Stay", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("StayScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("MainScene", {cb: this.crowbar}));
    }


    update(){}
}