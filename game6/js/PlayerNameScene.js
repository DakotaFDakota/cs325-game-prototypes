class PlayerNameScene extends Phaser.Scene{
    constructor(){
        super("PlayerNameScene");
        let playername;
        let numplayers
    }

    init(data){
        this.numplayers = data.num;
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
        let i = 0;
        while(i < this.numplayers){
            //console.log(this.playerarray);
            this.nameInput = this.add.dom(250,250).createFromCache("form");
            this.message = this.add.text(100,100, "Name of Players: ", {
                color: "#FFFFFF",
                fontSize: "20px",
            }).setOrigin(0.5);

        
            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

            this.returnKey.on("down", event => {
                let name = this.nameInput.getChildByName("name");
                if(name.value != "") {
                    this.message.setText("Player 1: " + name.value);
                    this.playername = name.value;
                    this.addPlayers(this.playername);
                    //console.log(playerarray[0]);
                    name.value = "";
                    i++;
                }
            })
            //.log(i);
        }
    }


    update(){}
}

export default PlayerNameScene;