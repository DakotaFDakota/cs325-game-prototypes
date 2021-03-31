export default class KingWinScene extends Phaser.Scene{
    constructor(){
        super("KingWinScene");
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
        this.titletext = this.add.text(50,150,"The King strikes you down and your", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "team is forced to join the Dana", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "Pretzel Tribe, forced to make", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "pretzels till the end of time.", {font: "20px Courier"})
        this.option1 = this.add.text(90, 260, "GAME OVER", {font: "50px Courier", fill: "#FF0000"});
        this.option1 = this.add.text(90, 300, "TRY AGAIN?", {font: "50px Courier", fill: "#FF0000"});
        this.option1.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("MainScene", {cb: 0}));
    }


    update(){}
}