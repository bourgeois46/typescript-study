// 제네릭


// 제네릭 함수 -> 모든 타입 두루두루 범용 함수

function func<T>(value: T): T { //T -> 타입 변수 -> 함수를 호출할 때 타입이 결정된다.
    return value;
}

let num = func(10);
// num.toUpperCase();
// num.toFixed();

if (typeof num === 'number') {
    num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]); // 타입 직접 명시
