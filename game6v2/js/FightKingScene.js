export default class FightKingScene extends Phaser.Scene{
    constructor(){
        super("FightKingScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
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

    preload(){}

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

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,150,"The King accepts your challenge,", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "removes his crown and worn cape.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Strike the King", {font: "20px Courier"});
        this.option1.setInteractive();

        if(this.crowbar == 1){
            if(this.player1health < 2 || this.player2health < 2 || this.player3health < 2 || this.player4health < 2){
                let strike = Phaser.Math.Between(0,10);
                console.log(strike);
                if(strike < 5){
                    this.option1.on('pointerdown', () => this.scene.start("KingWinScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
                if(strike > 5){
                    this.option1.on('pointerdown', () => this.scene.start("KingLoseScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
            }
            if(this.player1health == 3 || this.player2health == 3 || this.player3health == 3 || this.player4health == 3){
                let strike = Phaser.Math.Between(0,10);
                console.log(strike);
                console.log(strike > 1);
                if(strike < 1){
                    this.option1.on('pointerdown', () => this.scene.start("KingWinScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
                if(strike > 1){
                    this.option1.on('pointerdown', () => this.scene.start("KingLoseScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
            }
        }

        if(this.crowbar == 0){
            if(this.player1health < 2 || this.player2health < 2 || this.player3health < 2 || this.player4health < 2){
                let strike = Phaser.Math.Between(0,10);
                console.log(strike);
                if(strike < 3){
                    this.option1.on('pointerdown', () => this.scene.start("KingWinScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
                if(strike > 3){
                    this.option1.on('pointerdown', () => this.scene.start("KingLoseScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
            }
            if(this.player1health > 2 || this.player2health > 2 || this.player3health > 2 || this.player4health > 2){
                let strike = Phaser.Math.Between(0,10);
                console.log(strike);
                if(strike < 1){
                    this.option1.on('pointerdown', () => this.scene.start("KingWinScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
                if(strike > 1){
                    this.option1.on('pointerdown', () => this.scene.start("KingLoseScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
                }
            }
        }

        this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
        this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
        if(this.numplayers == 3){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
        }
        if(this.numplayers == 4){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
        }

    }


    update(){}
}