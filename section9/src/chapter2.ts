// infer 
// inference -> 추론하다
// infer R -> R을 추론해라

type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

type ReturnType<T> = T extends () => infer R ? R : never; // R이 string 타입으로 추론된다

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // never -> string과 never는 교집합이 없는 서로소 집합 -> 조건식이 거짓이 된다 -> infer

type C = ReturnType<number>; // never => T = number / () => infer R 이 number의 슈퍼타입이 될 수 없다 -> 추론 불가능 -> 조건식 거짓
// any더라도 number의 슈퍼타입이 될 수 없다




// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number


type PromiseB = PromiseUnpack<Promise<string>>;
// string