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

function foo(a, b, c) {
  //유사 객체는 내장 메서드 사용 불가
  arguments.forEach((arg) => {
    console.log(arg);
  });
}
foo("a", "b", "c");

function foo(a, b, c) {
  Array.prototype.forEach.call(arguments, (arg) => {
    console.log(arg);
  });
}
foo("a", "b", "c");

let a = 10;
let b = new Number(10);
console.log(typeof a);
console.log(typeof b);

const str = new String("javascript");
console.log(typeof str);

const num = new Number(11);
console.log(num.valueOf());

let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i, " * ", j, "=", i * j);
  }
}

let sum = 0;
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    sum += i;
  } else if (i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);

for (let i = 0; i < 101; i++) {
    i2str = i.toString();
    
    if (i2str.includes('3')){
        console.log("짝")
    }
    else{
        console.log(i2str);
    }
}

result1 = 10 || 100;
console.log(result1)

result2 = 0 && 100;
console.log(result2)

reuslt3 = null || 100;
console.log(reuslt3);

result4 = null && 100;
console.log(result4)

username = 'poly';
result5 = username || "유저 이름이 없습니다.";
console.log(result5);

username= undefined;
result6 = username || "유저 이름이 없습니다.";
console.log(result6)


let result1;
let result2 = result1 ?? 100;

let result3 = 10;
let result4 = result3 ?? 100;

let result5 = null;
let result6 = result5 ?? 100;


console.log(1 == true);
console.log(1 === true);
console.log(1 === 1);