// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void { // 반환값이 없다
    console.log("hello");
}

let a: void; 
a = undefined; // 만 가능
// a = null; // "strictNullChecks": false일 때만 가능


// undefined, null -> return 문을 써야함
// 반환값이 없을 때는 void 타입을 사용해야 함



// never
// never -> 존재하지 않는
// 불가능한 타입
// 아무런 값도 담을 수 x 
// any 타입의 변수에 할당할 수 x

function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error("error");
}

function func5(): never { // 실행되면 바로 프로그래밍 중지
    throw new Error("error");
}


