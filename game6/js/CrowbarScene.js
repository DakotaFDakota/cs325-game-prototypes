export default class CrowbarScene extends Phaser.Scene{
    constructor(){
        super("CrowbarScene");
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
        this.crowbar = 1;
        let playerinj = Phaser.Math.Between(1,4);
        this.titletext = this.add.text(50,150,"You retrieve the crowbar but Player " + playerinj, {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "cuts their leg on the glass and", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "is bleeding.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Stay", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("SurvivalScene", {cb: this.crowbar}) );
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
    }


    update(){}
}