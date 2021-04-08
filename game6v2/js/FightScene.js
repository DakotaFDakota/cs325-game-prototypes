export default class FightScene extends Phaser.Scene{
    constructor(){
        super("FightScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
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

            this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
            this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
            if(this.numplayers == 3){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            }
            if(this.numplayers == 4){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
                this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
            }

            this.option1.on('pointerdown', () => this.scene.start("MenuScene", {cb: 0}));
        }
        else{
            this.titletext = this.add.text(50,150,"You team is fights off the", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "men and you escape.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 220, "Continue", {font: "20px Courier"});
            this.option1.setInteractive();
            //this.option2 = this.add.text(50, 250, "Continue", {font: "20px Courier"});
            //this.option2.setInteractive();

            this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
            this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
            if(this.numplayers == 3){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            }
            if(this.numplayers == 4){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
                this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
            }

            this.option1.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
            //this.option2.on('pointerdown', () => this.scene.start("DiamondTrainScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        }
        

    }


    update(){}
}