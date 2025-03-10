// 1. null 병합 연산자
// => 존재하는 값을 추려내는 기능
// => null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// => var4는 undefined 가 되는데 var2 는 10이므로 이 연산의 결과값은 10이 된다.
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;
// 처음에 적힌 값이 null, undefined 가 아니면 그 값을 반환한다.

let userName = "이한조";
let userNickName = "Hanjo";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// => 값의 타입을 문자열로 반화하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;

// 3. 삼항 연산자
// => 항을 3개 사용하는 연산자
// => 조건식을 이용해서 참, 거짓일 때의 기능을 다르게 하는 연산자

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 => "짝", "홀수 => "홀"

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
