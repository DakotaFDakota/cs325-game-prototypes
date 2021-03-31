export default class FightScene extends Phaser.Scene{
    constructor(){
        super("FightScene");
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
        let fight = Math.random();
        
        if(this.crowbar === 1){
            fight = fight + 1;
        }
        if(fight <= 1){
            this.titletext = this.add.text(50,150,"Your entire team is captured by", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "the men and turned into pretzels.", {font: "20px Courier"})
            this.option1 = this.add.text(90, 220, "GAME OVER", {font: "50px Courier", fill: "#FF0000"});
            this.option1 = this.add.text(90, 270, "TRY AGAIN?", {font: "50px Courier", fill: "#FF0000"});
            this.option1.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("MainScene", {cb: 0}));
        }
        else{
            this.titletext = this.add.text(50,150,"You team is fights off the", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "men and you escape.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 220, "Continue", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 250, "Continue", {font: "20px Courier"});
            this.option2.setInteractive();

            this.option1.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar}));
            this.option2.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar}));
        }
        

    }


    update(){}
}