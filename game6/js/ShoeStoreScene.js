export default class ShoeStoreScene extends Phaser.Scene{
    constructor(){
        super("ShoeStoreScene");
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
        this.titletext = this.add.text(50,150,"Your group runs in Running and", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "Fun Shoe Store where you find two", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 190, "huddled in a corner. The men have long", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 210, "hair and rough faces, wearing only", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 230, "a loin cloth. The men are baking ", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 250, "pretzels and giggling about the", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 270, "'special ingredients' they are", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 290, "putting in the pretzels", {font: "20px Courier"});
        this.option1 = this.add.text(50, 340, "Approach the Men", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 370, "Continue", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("FightMenScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar}));

    }


    update(){}
}