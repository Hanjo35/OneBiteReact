import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// const { add, sub } = require("./math");

// import mul from "./math.js";

// ES 모듈에서는 .js(확장자명) 꼭 붙여줘야 함

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

// package.json 에 ES 모듈 시스템을
// 사용한다고 선언했기 때문에 오류 발생함
