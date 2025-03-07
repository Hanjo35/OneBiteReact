// function returnFalse() {
//     console.log("False 함수");
//     return false;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return true;
// }

// // console.log(returnFalse() && returnTrue()); // false
// // 첫번째 연산에서 결과가 확정 되면 두번째 연산은 접근조차 하지 않는다.
// console.log(returnTrue() || returnFalse()); // False 함수, True 함수, false

// 단락평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");

}

printName();
printName({ name : "이한조"});