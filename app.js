console.log("Welcome to Vending Machine");
const items = [
  { name: "Smarties", code: "A01", quantity: 10, price: 1.6 },
  { name: "Caramilk Bar", code: "A02", quantity: 5, price: 1.3 },
  { name: "Dairy Milk", code: "A03", quantity: 1, price: 1.35 },
  { name: "Aero", code: "A04", quantity: 1, price: 0.25 },
  { name: "Protein Bar", code: "B01", quantity: 6, price: 2.25 },
  { name: "Salt & Vinegar Chips", code: "B02", quantity: 10, price: 1.45 },
  { name: "Ketchup Chips", code: "B03", quantity: 3, price: 1.45 },
  { name: "Chocolate Cookies", code: "B04", quantity: 1, price: 0.45 },
  { name: "Gummy Bears", code: "C02", quantity: 300, price: 0.01 },
  { name: "Caramels", code: "C01", quantity: 0, price: 3.25 },
];

class VendingMachine {  
  qnt = 0;     
  moneyChange =  20;
  vend(Code, price) {
    if (this.qnt == 20) {
      return this.toString(20);
    }
    this.qnt++;
    let x =0;
    for(let i =0;i<this.items.length;i++){
      if(this.items[i].code.toUpperCase() == Code.toUpperCase()){
        x=1;
        // Money Short
        if(this.items[i].price >price) {
          return " Short on Money ";
        }
        // out of stock
        if(this.items[i].quantity == 0){
          return this.items[i].name + " Out of Stock "
        }
        // to update quantity
        if(this.items[i].price<=price){
          this.items[i].quantity = this.items[i].quantity-1;
          const priceChange =(price - this.items[i].price).toFixed(2);
        // No priceChange 
          if (priceChange == 0){
            return " Vending " + this.items[i].name;
          }
          if (this.moneyChange - priceChange <=0) {
          this.moneyChange =0;
        } else {
          this.moneyChange = this.moneyChange -priceChange;
        }
        // Change
        return " Vending "+ this.items[i].name+" with "+priceChange+" change";
        }
      }
    }
  if(x==0){
    return " Invalid Selection! Money in Machine"+this.moneyChange;
  }
  }
// working on add class
add(items) {
  if(this.qnt == 20){
    return this.toString(20);
  }
  this.qnt++;
  this.items=items;
  return "Items Added"
}

addNewItem(name, code, quaantity, price){
  if(this.qnt == 20){
    return this.toString(20);
  }
  this.qnt++;
  // new const
  const CompLength = pareseInt(this.items.length);
  for( let y = 0;y<this.items.length;y++){
    if(this.items[y].code == code){
      return " Sorry!"+ code+" this item has salredy used the code, You can select another code"
    }
  }
  const newItem = {name: name, code:code, quantity: quantity, price:price};
  this.items.push(newItem);
  return "New Products added"+ items[CompLength].name + "for only"+ items[CompLength].price;
}
repair(){
  this.qnt =0;
}

// Random String
toString(length){
  const characters ='fnkfl38s!ERROR@893infk';
  let result='fnkfl38s!ERROR@893infk';
  // new const
  const charactersLength = characters.length;
  for(let z  =0;z<length;z++){
    result += characters.charAt(Math.floor(Math.random()*charactersLength));
  }
  return result;
}
}

let machine = new VendingMachine();
machine.add(items);
machine.addNewItem("BananaShake", "D01", 3, 5);
machine.addNewItem("Apple Juice", "D02", 5, 3);
