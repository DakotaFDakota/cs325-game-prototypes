class PlayerNameScene4 extends Phaser.Scene{
    constructor(){
        super("PlayerNameScene4");
        let playername;
        let numplayers;
        let player1;
        let player2;
        let player3;
        let player4;
    }

    init(data){
        this.numplayers = data.num;
        this.player1 = data.playname1;
        this.player2 = data.playname2;
        this.player3 = data.playname3;
    }
    

    clicked(clickedtext){
        clickedtext.destroy();

    }

    addPlayers(name){

    }


    preload(){
        this.load.html('form', 'js/form.html');
    }


    create(){
        //add player names\
        console.log(this.numplayers);
            this.nameInput = this.add.dom(250,250).createFromCache("form");
            this.message = this.add.text(250,200, "Name of Players 4: ", {
                color: "#FFFFFF",
                fontSize: "20px",
            }).setOrigin(0.5);

        
            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

            this.returnKey.on("down", event => {
                let name = this.nameInput.getChildByName("name");
                if(name.value != "") {
                    this.message.setText("Player 4: " + name.value);
                    this.scene.start('MainScene', {num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: name.value});
                }
            })
    }


    update(){}
}

export default PlayerNameScene4;