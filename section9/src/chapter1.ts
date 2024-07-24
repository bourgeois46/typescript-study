// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>; // string

let b : StringNumberSwitch<string>; // number

let c : StringNumberSwitch<number | string>; // string | number 

// 유니언 타입 -> number, string이 분리되어서 들어감
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number

// 결과 2개가 유니언으로 합쳐져서 string | number 가 되는 것

let d : StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string> 


// 2단계
// number |
// string |
// number

// 결과
// number | string


// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number , string> |
// Exclude<string , string> |
// Exclude<boolean , string>

// 2단계
// T -> number |
// never |   => 타입 없애기
// T -> boolean

// 결과
// number | boolean

// 유니언 타입에 never가 포함되면 사라진다
// 유니언 -> 합집합
// never -> 공집합

// 특정 유니언 타입으로부터 특정 타입(string)만 제거할 수 있다



type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// T -> string |
// never

// 결과
// string



// 분산적인 조건부를 사용하고 싶지 않을 때
// extends 양 옆에 []

type StringNumberSwitch1<T> = [T] extends [number] ? string : number;

let e : StringNumberSwitch1<boolean | number | string>;

// 분산되지 않고 boolean, number, string 의 합집합 number 로 들어가서 e는 number 타입이 된다

