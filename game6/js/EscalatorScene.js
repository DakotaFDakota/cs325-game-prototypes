export default class EscalatorScene extends Phaser.Scene{
    constructor(){
        super("EscalatorScene");
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
        let playerinj = Phaser.Math.Between(1,4);
        //let playerinjtext = ("living in the escalator, player " + playerinj + " was bitten")
        this.titletext = this.add.text(50,150,"You encounter a family of cobras", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "living in the escalator, player " + playerinj, {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "was bitten and dies.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Continue", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Morn his death and continue", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
    }


    update(){}
}