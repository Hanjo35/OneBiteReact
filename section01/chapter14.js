// 스코프
// => 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// => 전역 스코프 : 전체 영역에서 접근 가능
// => 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;
  console.log(b);

  function funcB() {} // 지역 스코프
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {} // 함수에서만 지역 스코프, 조건문이나 반복문에서는 함수 선언 가능
}

funcB();
