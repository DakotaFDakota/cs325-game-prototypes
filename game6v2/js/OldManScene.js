export default class OldManScene extends Phaser.Scene{
    constructor(){
        super("OldManScene");
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
        this.titletext = this.add.text(50,150,"The Old Man heals your wounds. He", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "warns your group of the Dana Pretzel", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "tribe, the tribe who controls the food", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "in the mall. He warns your group to", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 230, "avoid foods that are not packaged as", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 250, "it may have been poisoned.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 300, "Thank the Old Man and continue", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 330, "Stay with the Old Man", {font: "20px Courier"});
        this.option2.setInteractive();

        this.player1health = 3;
        this.player2health = 3;
        this.player3health = 3;
        this.player4health = 3;

        this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
        this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
        if(this.numplayers == 3){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
        }
        if(this.numplayers == 4){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
        }

        this.option1.on('pointerdown', () => this.scene.start("ShoeStoreScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        this.option2.on('pointerdown', () => this.scene.start("StayOldManScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));

    }


    update(){}
}