class PlayerNameScene2 extends Phaser.Scene{
    constructor(){
        super("PlayerNameScene2");
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
            this.nameInput = this.add.dom(250,250).createFromCache("form");
            this.message = this.add.text(250,200, "Name of Player 2: ", {
                color: "#FFFFFF",
                fontSize: "20px",
            }).setOrigin(0.5);

        
            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

            this.returnKey.on("down", event => {
                let name = this.nameInput.getChildByName("name");
                if(name.value != "") {
                    this.message.setText("Player 2: " + name.value);
                    if(this.numplayers < 3){
                        this.scene.start('MainScene', {num: this.numplayers, playname1: this.player1, playname2: name.value});

                    }
                    if(this.numplayers > 2){
                        this.scene.start('PlayerNameScene3', {num: this.numplayers, playname1: this.player1, playname2: name.value});
                    }
                }
            })
    }


    update(){}
}

export default PlayerNameScene2;