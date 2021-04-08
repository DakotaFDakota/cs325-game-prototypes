export default class DiamondTrainScene extends Phaser.Scene{
    constructor(){
        super("DiamondTrainScene");
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
        let playerinj = Phaser.Math.Between(1,4);
        this.titletext = this.add.text(50,150,"You see a mall train and ", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "a diamond store.", {font: "20px Courier"});
        this.option1 = this.add.text(50, 220, "Jump on the Train", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Enter the Diamond Store", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("TrainScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("DiamondStoreScene", {cb: this.crowbar}));
    }


    update(){}
}