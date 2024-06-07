// 타입 추론

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "류주아",
    profile: {
        nickname: "bourgeois",
    },
    url: ["https://bourgeois.com"],
};

let {id, name, profile, url} = c; // 객체 구조분해할당해도 잘 추론한다.

let [one, two, three] = [1, "hello", true]; // 배열 구조분해할당

function func(message="hello") { // 함수의 반환값 타입을 추론할 때는 초기값x, 리턴값
    return "hello";    
}


let d; // 암묵적 any 타입 -> any 진화
d = 10; // any -> number
d.toFixed();
// d.toUpperCase();

d = "Hello"; // any -> string
d.toUpperCase();
// d.toFixed();


const num = 10; // number 리터럴 타입으로 추론
const str = "hello"; // string 리터럴 타입

// 최적 공통 타입

let arr = [1, "string"]; // 배열 -> union 타입

// 타입 넓히기
// 범용적으로 추론
// const가 아니면





