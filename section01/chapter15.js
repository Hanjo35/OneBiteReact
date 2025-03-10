// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 방식 (대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  // key: value
  name: "이한조",
  age: 27,
  hobby: "야구 관람",
  job: "FE Developer",
  extra: {}, // 함수 객체 불리언 등 다양한 타입 가능
  10: 20, // key는 문자열로 변환되어 저장됨
  "like cat": true, // key에 공백이나 특수문자가 들어갈 경우 ""로 감싸줘야 함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "Full Stack Developer";
person["favoriteFood"] = "라면";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유뮤를 확인 하는 방법 (in 연산자)

let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2);
