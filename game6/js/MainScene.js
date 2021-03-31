export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
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
        this.titletext = this.add.text(50,150,"You and your friends enter an", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "abandoned mall in Sedona, Arizona.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Look Left", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Look Right", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("LeftScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("RightScene", {cb: this.crowbar}));
    }


    update(){}
}