export default class DiamondStoreScene extends Phaser.Scene{
    constructor(){
        super("DiamondStoreScene");
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
        this.titletext = this.add.text(50,50,"You meet a man who calls himself 'The", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 70, "Pretzel King'.  He wears a crown made", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 90, "of pretzels and salt, stuck together", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 110, "with dried mustard. His cape is long", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 130, "and worn. He asks you why you have", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 150, "entered his store and disturbed", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 170, "his people.", {font: "20px Courier"})

        this.option1 = this.add.text(50, 220, '"We have traveled many days and many', {font: "20px Courier"});
        this.option1 = this.add.text(50, 240, ' nights searching for food. Please', {font: "20px Courier"});
        this.option1 = this.add.text(50, 260, ' allow us to stay for a few days and', {font: "20px Courier"});
        this.option1 = this.add.text(50, 280, ' feed us and we will be on our way."', {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 320, '"Who are you to tell us what to do?', {font: "20px Courier"});
        this.option2 = this.add.text(50, 340, ' We are free travelers, you have no', {font: "20px Courier"});
        this.option2 = this.add.text(50, 360, ' power here. You are confused and', {font: "20px Courier"});
        this.option2 = this.add.text(50, 380, ' a sick person who has taken over this', {font: "20px Courier"});
        this.option2 = this.add.text(50, 400, ' mall to make yourself feel important. We ', {font: "20px Courier"});
        this.option2 = this.add.text(50, 420, ' challenge you to a duel for', {font: "20px Courier"});
        this.option2 = this.add.text(50, 440, ' king of the mall."', {font: "20px Courier"});
        this.option2.setInteractive();

        this.option1.on('pointerdown', () => this.scene.start("FeedGroupScene", {cb: this.crowbar}));
        this.option2.on('pointerdown', () => this.scene.start("FightKingScene", {cb: this.crowbar}));

    }


    update(){}
}