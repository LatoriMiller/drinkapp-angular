//Model that represents the data
class Drink {
    _id: string;
    type: string;
    flavor: string;
    brand: string;
    
//this creates a blank to do
    constructor(){
        this.type = ""
        this.flavor = ""
        this.brand = ""
       
    }
}

export default Drink;