// 1. 함수 표현식

function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA(); // 함수 자체를 변수에 담아두기 가능

let varB = function () {
  // 익명함수 => 함수 이름 없이 변수에 바로 담아 선언
  // console.log("funcB");
};

varB(); // 값으로서 선언이 되는 것이기 떄문에 funcA 와 달리 호이스팅 되지 않음

// 2. 화살표 함수
let varC = () => 1;
let varD = (value) => value + 1;
let varE = (value) => {
  console.log(value);
  return value + 1; // 추가적인 작업 필요하면 중괄호로 감싸서 사용
};

console.log(varD(10));
