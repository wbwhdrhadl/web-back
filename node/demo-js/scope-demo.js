if (true) {
    var num1 = 7;
    const num2 = 3; // 블록 {} 스코프 = 지역 변수
    let num3 = 5; // 블록 {} 스코프

    // num2 = 10;
    num3 = 21;

    console.log(num1 + " x " + num2 + " = " + num3);
    console.log(`${num1}x ${num2} = ${num3}`); // 템플릿 문자열
}

console.log(num1)
// console.log(num2)
// console.log(num3)
