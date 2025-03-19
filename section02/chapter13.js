function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    // const newP = add10(result);
    return add10(result);
    // return newP; // 새로운 프로미스 객체 반환, then 메서드 결과값이 이 새로운 프로미스 객체가 됨
  })
  .then((result) => {
    console.log(result); // 수정
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드

// promise
//   .then((value) => {
//     console.log(value);
//   }) // Promise Chaning
//   .catch((error) => {
//     console.log(error);
//   });
