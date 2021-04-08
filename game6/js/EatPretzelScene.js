export default class EatPretzelScene extends Phaser.Scene{
    constructor(){
        super("EatPretzelScene");
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
        this.titletext = this.add.text(50,150,"Player " + playerinj + " takes damage from", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "the poisoned pretzels.", {font: "20px Courier"});
        this.option1 = this.add.text(50, 220, "Eat another pretzel", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("EatPretzelScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
    }


    update(){}
}