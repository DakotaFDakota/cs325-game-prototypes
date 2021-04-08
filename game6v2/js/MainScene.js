export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
        let titletext;
        let titletext2;
        let playernames;
        let option1;
        let option2;
        let numplayers;
        let crowbar;
        let player1;
        let player2;
        let player3;
        let player4;
        let player1health;
        let player2health;
        let player3health;
        let player4health;
    }

    preload(){}

    init(data){
        this.numplayers = data.num;
        this.player1 = data.playname1;
        this.player2 = data.playname2;
        this.player3 = data.playname3;
        this.player4 = data.playname4;
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.player1health = 3;
        this.player2health = 3;
        this.player3health = 3;
        this.player4health = 3;
        this.crowbar = 0;

        this.titletext = this.add.text(50,150,"You and your friends enter an", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "abandoned mall in Sedona, Arizona.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 220, "Look Left", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 250, "Look Right", {font: "20px Courier"});
        this.option2.setInteractive();

        this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
        this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
        if(this.numplayers == 3){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
        }
        if(this.numplayers == 4){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
        }

        this.option1.on('pointerdown', () => this.scene.start("LeftScene", {cb: this.crowbar,  num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        this.option2.on('pointerdown', () => this.scene.start("RightScene", {cb: this.crowbar, num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
    }


    update(){}
}