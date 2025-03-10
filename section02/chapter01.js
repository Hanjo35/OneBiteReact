// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// => 7가지 Falsy한 값을 제외한 나머지 값들은 모두 Truthy한 값
let t1 = {};
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례

function printName(person) {
  if (!person) {
    console.log("person 값이 없습니다.");
    return;
  }
  console.log(person.name);
}

let person = { name: "이한조" };
printName(person);
