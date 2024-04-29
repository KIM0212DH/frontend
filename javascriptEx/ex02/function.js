console.log(multiply(3, 4));
function multiply(a, b) {
    return a * b;
}

const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(3, 4));

console.log(multiply(3, 4));
var multiply = function (a, b) {
    return a * b;
};

function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("동현"));
console.log(greeting());
console.log(greeting("윤진", "원영"));

function add(a = 100, b = 200) {
    console.log(a, b);
    return a + b;
}
add(10, 20);
add(10);
add();
add((b = 300)); // 500
add(undefined, 300);

function add({ a = 100, b = 200 }) {
    console.log(a + b);
}
add({ b: 300 }); // 400

function sum(x, y, z) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[3]);
    console.log(arguments.length);
    return x + y + z;
}
sum(2, 3);
sum(100, 10, 1);

var add = function (x, y) {
    return x + y;
};
let add = (x, y) => x + y;
console.log(add(1, 2));



