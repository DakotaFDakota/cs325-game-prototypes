export default class FeedGroupScene extends Phaser.Scene{
    constructor(){
        super("FeedGroupScene");
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
        this.titletext = this.add.text(50,150,"The King agrees to feed your", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "group and let you stay.", {font: "20px Courier"})
        this.option1 = this.add.text(90, 220, "YOU WIN", {font: "50px Courier", fill: "#006400"});
        this.option1 = this.add.text(90, 260, "TRY AGAIN?", {font: "50px Courier", fill: "#006400"});
        this.option1.setInteractive();
        
        let sedona = this.sound.add('sedona', {volume: 0.1});
        sedona.play();

        this.option1.on('pointerdown', () => this.scene.start("MenuScene", {cb: 0, num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
    }


    update(){}
}