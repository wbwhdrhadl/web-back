// 함수로 만드는 방법
function add1(x,y) {
    return x+y;

}

// 모듈화해서 사용하는 방법
let add2 = function(x,y) {
    return x+y
}

// 화살표 함수 (arrow function)
const add3 = (x,y) => {
    return x+y
}

// return을 바로 화살표를 이용해 하는 방법
var add4 = (x,y) => x+y

console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))