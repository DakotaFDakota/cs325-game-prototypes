export default class FightKingScene extends Phaser.Scene{
    constructor(){
        super("FightKingScene");
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
        this.titletext = this.add.text(50,150,"The King accepts your challenge,", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "removes his crown and worn cape.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Strike the King", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Strike the King", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("KingWinScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("KingLoseScene", {cb: this.crowbar}));
    }


    update(){}
}