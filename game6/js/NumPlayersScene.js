class NumPlayersScene extends Phaser.Scene{
    constructor(){
        super("NumPlayersScene");
        let playername;
        let numberplayers;
        //let numplayers;
        //game text
    }

    addPlayers(){
        
    }


    preload(){
        this.load.html('form1', 'js/form1.html');
    }


    create(){
        
        //add player names
        this.nameInput = this.add.dom(250,250).createFromCache("form1");
        //this.message = this.add.text(100,100, "Number of Players: ", {
         //   color: "#FFFFFF",
          //  fontSize: "20px",
       // }).setOrigin(0.5);
        
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.returnKey.on("down", event => {
            let numplayers = this.nameInput.getChildByName("numplayers");
            if(numplayers.value != "" && numplayers.value < 5 && numplayers.value > 1) {
                //this.message.setText("Number: " + numplayers.value);
                this.numberplayers = numplayers.value;
                //numplayers.value = "";
                this.scene.start('PlayerNameScene', {num: this.numberplayers});
            }
        })
    }


    update(){}
}

export default NumPlayersScene;