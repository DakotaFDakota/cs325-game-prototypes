export default class TrainScene extends Phaser.Scene{
    constructor(){
        super("TrainScene");
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
        this.titletext = this.add.text(50,150,"The mall train stops abruptly. The", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "pretzel men have the train controller.", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "They capture you and force you to ", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "make pretzels for the rest ", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 230, "of your life.", {font: "20px Courier"})
        this.option1 = this.add.text(90, 280, "GAME OVER", {font: "50px Courier", fill: "#FF0000"});
        this.option1 = this.add.text(90, 320, "TRY AGAIN?", {font: "50px Courier", fill: "#FF0000"});
        this.option1.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("MainScene", {cb: 0}));
    }


    update(){}
}