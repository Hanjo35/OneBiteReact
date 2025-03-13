const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
    // console.log("안녕");
    // reject("왜 실패 했는지 이유...");
  }, 2000);
});

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

promise.then((value) => {
  console.log(value);
});

promise.catch((error) => {
  console.log(error);
});
