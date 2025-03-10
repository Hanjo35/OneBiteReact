// 함수

function getArea(width, height) {
  let area = width * height;

  function another() {
    console.log("another");
  }

  another();
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

getArea(120, 200);

// 자바스크립트는 함수 호출식을 위로 올려버려도 정상작동됨.
// => 자바스크립트에는 호이스팅(끌어올리기)이 가능하기 때문
