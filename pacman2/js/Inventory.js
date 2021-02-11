import items from "./Items.js";


export default class Inventory {
    constructor() {
        this.columns = 2;
        this.rows = 1;
        this.selected = 0;
        this.observers = [];
        
        this.items = {
          //  0: {name: "phaser", quantity: 1},
            //1: {name: "ruby", quantity: 3}
        }
        //this.items.name;
        //this.items[0] = {blank1, 1};
        this.addItem({name: "phaser", quantity: 1});
        //this.addItem({name: "blank2", quantity: 1});
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscribe => subscriber !== fn);
    }

    broadcast() {
        this.observers.forEach(subscriber => subscriber());
    }


    addItem(item){
        let existingKey = Object.keys(this.items).find(key => this.items[key].name === item.name);
        if(existingKey){
            this.items[existingKey].quantity += item.quantity;
        }else{
            for (let index = 0; index < this.columns*this.rows; index++) {
              let existingItem = this.items[index];
              if(!existingItem){
                this.items[index] = item;
                break;
              }  
            }

        }
        this.broadcast();
    }


    getItem(index) {    
        return this.items[index];
    }

    get selectedItem(){
        return this.items[this.selected];
    }

    getItemFrame(item){
        return items[item.name].frame;
    }

    getItemQuantity(itemName) {
        return Object.values(this.items).filter(i=>i.name===itemName).map(i => i.quantity).reduce((accumulater,currentValue) => accumulater + currentValue,0);
      }
}