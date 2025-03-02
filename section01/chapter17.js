// 1. 배열

let arrA = new Array(); // 배열 생성자 
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [ // 배열 요소에는 모든 타입이 들어갈 수 있음
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열 요소 접근

let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";

console.log(arrC);


