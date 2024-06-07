// 선언 합침

// 인터페이스는 동일한 이름으로 중복 선언 가능 -> 모든 선언이 합쳐짐

interface Person {
    name: string;
}

interface Person {
    age: number;
}

interface Developer extends Person {
    name: "hello"; // 재정의 -> 무조건 같은 타입이어야 됨 / 서브 타입x
}

const person: Person = {
    name: "",
    age: 23
}

// 모듈 보강

interface Lib {
    a: number; 
    b: number; 
}

interface Lib {
    c: string; // 모듈 보강 
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}