console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(1234));
console.log(String(Symbol("key")));
console.log(String(3n));
console.log(String({ 1: "a" }));

const aa = Symbol("k");
alert(aa);
console.log(aa);
Number(aa);

const aa = String(Symbol("k"));
alert(aa);
console.log(aa);
Number(aa);

console.log(undefined.toString()); // type error
onsole.log(null.toString()); // type error
console.log(true.toString());
console.log((1234).toString());
console.log(Symbol("key").toString());
console.log(3n.toString());
console.log({ 1: "a" }.toString());

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(1234));
console.log(Number(Symbol("key"))); // type error
console.log(Number(3n));
console.log(Number({ 1: "a" }));

3n + 3; // bigInt 와 숫자 합은 type error

console.log(parseInt("11", 10));
console.log(parseInt("-1", 10));
console.log(parseInt("34a", 10));
console.log(Number("34a", 10));
console.log(parseInt(undefined, 10));
console.log(parseInt(null, 10));
console.log(parseInt(true, 10));
console.log(parseInt(false, 10));
console.log(parseInt("1234", 10));
console.log(parseInt(Symbol("key"), 10));
console.log(parseInt(3n, 10));
console.log(parseInt({ 1: "a" }, 10));

console.log(Boolean(undefined));
console.log(Boolean(!undefined));
console.log(Boolean(!!undefined));
console.log(Boolean(null));
console.log(Boolean(!null));
console.log(Boolean(!!null));
console.log(Boolean("1"));
console.log(Boolean("true"));
console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(+0));
console.log(Boolean(-0));
console.log(Boolean(!0));
console.log(Boolean(NaN));
console.log(Boolean(!NaN));
console.log(Boolean(!!NaN));
console.log(Boolean(123123));
console.log(Boolean(1, 23));
console.log(Boolean(+1));
console.log(Boolean(-1));
console.log(Boolean(Symbol(1)));
console.log(Boolean(3n));
console.log(Boolean({ 1: "a" }));
console.log(Boolean({}));

console.log();
console.log();
console.log();
console.log();

console.log(Object.prototype.toString());

var obj = {
    valueOf: function () {
        return 123;
    },
    toString: function () {
        return "toString..";
    },
};

var result1 = String(obj);
var result2 = obj + "a";
var result3 = "a" + obj;
console.log(result1);
console.log(result2);
console.log(result3);

console.log("[object Object]" == {});

console.log("a" < "b");
console.log("ba" < "b");
console.log("1" < "04");
console.log("11" < "1");

reuslt1 = 10 || 100;

username = "gg";
result5 = username || "유저 이름이 없습니다.";
console.log(result5);
username = undefined;
result6 = username || "유저 이름이 없습니다.";
console.log(result6);
