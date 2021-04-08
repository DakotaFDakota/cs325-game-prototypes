export default class KingLoseScene extends Phaser.Scene{
    constructor(){
        super("KingLoseScene");
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

    preload(){
        this.load.audio('sedona', 'assets/audio/SedonaWinSong.mp3');
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,50,"The King submits his crown and cape", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 70, "to you and your team.  You win and", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 90, "are the new King of the Dana Pretzel", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 110, "Tribe. You hire new workers and make", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 130, "the mall a fulfilment center for", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 150, "the popular online retailer,", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 170, "Congo.com. You and your team recieve", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "a large settlement from", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "Congo.com's owner, Beff Jezos.", {font: "20px Courier"})

        this.option1 = this.add.text(90, 260, "YOU WIN", {font: "50px Courier", fill: "#006400"});
        this.option1 = this.add.text(90, 300, "TRY AGAIN?", {font: "50px Courier", fill: "#006400"});
        this.option1.setInteractive();

        let sedona = this.sound.add('sedona', {volume: 0.1});
        sedona.play();


        this.option1.on('pointerdown', () => this.scene.start("MenuScene", {cb: this.crowbar, num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));

    }


    update(){}
}