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

// Fetch API를 사용해 aaa.json 파일을 읽어옵니다.
fetch('https://jwonchi.github.io/kopoclass/JSON/supJson.json')
    .then(response => {
        // JSON 형태로 응답을 변환합니다.
        return response.json();
    })
    .then(data => {
        // data가 1 이상인 경우 퀴즈 만드는 함수를 호출한다. 
        console.log(data);

    })
    .catch(error => {
        console.error('파일을 읽는 중 오류 발생:', error);
    });