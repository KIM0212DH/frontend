const coffee = {myType: 'latte'};
Object.defineProperty(coffee, 'type', {
    set(type) {
        if(type !==null) {
            this.myType = type
        }
    },
    get(){
        return this.myType
    }
})

console.log(coffee.type);
coffee.type="aa";
console.log(coffee.type);



const coffeeP = {
    myPrice : 2000,
    set price(price){
        if(price > 2000) {
            this.myPrice = price
        }
    },
    get price(){
        return this.myPrice;
    }
};
console.log(coffeeP.price);
coffeeP.price = 5000;
console.log(coffeeP.price)