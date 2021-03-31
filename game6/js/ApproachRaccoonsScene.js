export default class ApproachRaccoonsScene extends Phaser.Scene{
    constructor(){
        super("ApproachRaccoonsScene");
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
        this.titletext = this.add.text(50,150,"The raccoons and startled and ", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "run away. Your team finds a box of ", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "Little Dana Snacks that is unopened.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Eat the Snacks", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("SnackScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("MainScene", {cb: this.crowbar}));
    }


    update(){}
}