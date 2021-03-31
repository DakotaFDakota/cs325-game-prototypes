export default class PretzelScene extends Phaser.Scene{
    constructor(){
        super("PretzelScene");
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
        this.titletext = this.add.text(50,150,"The pretzel store has been ransacked", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "of all pretzels and dough.  There ", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "are barrels of mustard and salt, but", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "the barrels are sealed.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 260, "Try to open the barrels", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 290, "Walk Away", {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("BarrelScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar}));
    }


    update(){}
}