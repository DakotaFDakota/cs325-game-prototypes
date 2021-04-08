export default class FightMenScene extends Phaser.Scene{
    constructor(){
        super("FightMenScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let crowbar;
    }

    init(data){
        this.crowbar = data.cb;
    }

    preload(){}

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,150,"The member of your group with the", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "lowest health is grabbed.  If all", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "players are full health, you escape.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Fight the men", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Run Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("FightScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar}));

    }


    update(){}
}