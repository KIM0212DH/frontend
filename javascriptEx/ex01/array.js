const arr = new Array(1, "2", true);
console.table(arr);
const arr = new Array(4);
console.log(arr);

const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const myArray = [1, 2, 3, 4, 5];
console.log(myArray.length);

const arr = [];
arr.foo = "foo";
console.log(arr.length);

const arr = [];
arr[0] = "1";
arr[2] = "2";
console.log(arr);
console.log(arr.length);

arr.forEach((element) => {
  console.log(element);
});

const arr = new Array(0);
console.log(arr.length);
arr.push(1);
console.log(arr.length);

const arr = [1, 2, 3, 4];
arr.length = 2;
console.log(arr);
arr.length = 10;
console.log(arr);

const myArray = ["사과", "바나나", "수박"];
myArray.shift();
console.log(myArray);
myArray.unshift("오이", "배");
console.log(myArray);

const arr = [1, 2, 3];
arr.splice(1, 0, 4);
console.log(arr);
arr.splice(2, 1, 5);
console.log(arr);

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); /* 오름차순 정렬 */
console.log(numbers);

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);

const arr = ["참외", "키위", "감귤"];
arr.forEach(function (item, index) {
  console.log(item, index);
  arr[index] = index;
});
console.log(arr);

const arr = [1, 2, 3];
const newArr = arr.map((x) => x + 1);
console.log(newArr);

const arr = [1, 2, 3];
const newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);

let arr1 = [1, 2];
let arr2 = [3, 4, 5];
const newArr = arr1.concat(arr2);
console.log(arr1);
console.log(newArr);

const arr = [1, 2, 3];
const newArr = arr.filter((x) => x > 1);
console.log(newArr);

const arr1 = ["hello", "world", "polytech"];
console.log(arr1.includes("world"));
console.log(arr1.includes("poly"));
console.log(arr1.includes("tech"));
console.log(arr1.includes("polytech"));

const arr1 = ["hello", "world", "polytech"];
console.log(arr1.join(" "));
console.log(arr1.join("!"));

const arr2 = ["010", "1234", "5678"];
console.log(arr2.join("-"));

const arr3 = [010, 1234, 5678]; //0으로 시작하면 8진수 취급
console.log(arr3.join("-"));

const simarr = {
  0: "hi",
  1: "java",
  2: "script",
  length: 4,
};
console.log(simarr);

function foo(a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2]);
  console.log(arguments.length);
}
foo("a", "b", "c");

function foo(a, b, c) { //유사 객체는 내장 메서드 사용 불가
  arguments.forEach((arg) => {
    console.log(arg);
  });
}
foo("a", "b", "c");

function foo(a,b,c){
    Array.prototype.forEach.call(arguments, (arg) => {
        console.log(arg);
    })
}
foo('a','b','c');

let a = 10;








