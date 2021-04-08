export default class DiamondStoreScene extends Phaser.Scene{
    constructor(){
        super("DiamondStoreScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let option3;
        let crowbar;
        let playernames;
        let numplayers;
        let player1;
        let player2;
        let player3;
        let player4;
        let player1health;
        let player2health;
        let player3health;
        let player4health;
    }

    init(data){
        this.crowbar = data.cb;
        this.numplayers = data.num;
        this.player1 = data.playname1;
        this.player2 = data.playname2;
        this.player3 = data.playname3;
        this.player4 = data.playname4;
        this.player1health = data.player1h;
        this.player2health = data.player2h;
        this.player3health = data.player3h;
        this.player4health = data.player4h;
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
        this.option3 = this.add.text(50, 380, ' a sick person who has taken over this', {font: "20px Courier"});
        this.option3 = this.add.text(50, 400, ' mall to make yourself feel important. We ', {font: "20px Courier"});
        this.option3 = this.add.text(50, 420, ' challenge you to a duel for', {font: "20px Courier"});
        this.option3 = this.add.text(50, 440, ' king of the mall."', {font: "20px Courier"});
        this.option2.setInteractive();
        this.option3.setInteractive();

        this.playeroptions = this.add.text(50, 470, "" + this.player1 + "'s Health: " + this.player1health);
        this.playeroptions = this.add.text(50, 490, "" + this.player2 + "'s Health: " + this.player2health);
        if(this.numplayers == 3){
            this.playeroptions = this.add.text(275, 470, "" + this.player3 + "'s Health: " + this.player3health);
        }
        if(this.numplayers == 4){
            this.playeroptions = this.add.text(275, 470, "" + this.player3 + "'s Health: " + this.player3health);
            this.playeroptions = this.add.text(275, 490, "" + this.player4 + "'s Health: " + this.player4health);
        }

        this.option1.on('pointerdown', () => this.scene.start("FeedGroupScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        this.option2.on('pointerdown', () => this.scene.start("FightKingScene", {cb: this.crowbar ,  num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        this.option3.on('pointerdown', () => this.scene.start("FightKingScene", {cb: this.crowbar ,  num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));

    }


    update(){}
}