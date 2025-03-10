// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3]; // 3회 호출

arr1.forEach(function (item, idx, arr) {
  //  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(4);

// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arr3 = [2, 2, 3];
let index = arr3.indexOf(20);
// console.log(index);

// let objectArr = [{ name: "이한조" }, { name: "홍길동" }];

// console.log(objectArr.indexOf({ name: "이한조" }));

// indexOf 로는 배열에 특정 객체값을 찾아낼 수가 없음.
// 기본적으로 얕은 비교로 동작하기 때문(동등 비교 연산자로 찾아내기 때문)
// 하지만 객체값들은 참조값을 기준으로 비교가 되기 때문에

// console.log(objectArr.findIndex((item) => item.name === "이한조"));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 조건식만 잘 만들어주면 복잡한 객체값도 찾을 수 있음

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이한조" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이한조"); // 객체 자체 반환

console.log(finded);
