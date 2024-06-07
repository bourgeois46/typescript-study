// 타입 단언
// 실제로 값을 그 타입으로 바꾸는 것x
// 타입스크립트 컴파일러의 눈을 가리는 것 -> 확실할 때만 사용하기

type Person = {
    name: string;
    age: number;
};

let person = {} as Person; // Person 타입으로 타입 단언
person.name = "류주아";
person.age = 23;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "멍멍이",
    color: "흰색",
    breed: "진도", // 타입 단언을 사용하면 초과 프로퍼티 검사 오류 사라짐
} as Dog


// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함


let num1 = 10 as never;
// 10은 number 타입이고 never는 모든 타입의 서브타입
// 10이 never의 슈퍼타입이므로 성립

let num2 = 10 as unknown;
// 10은 number 타입이고 unknown은 모든 타입의 슈퍼타입
// 10이 unknown의 서브타입이므로 성립

// let num3 = 10 as string; // error!
// number와 string은 서로 다른 집합, 교집합이 없음



// 다중 단언 -> 사용 권유 x
let num3 = 10 as unknown as string; 
// unknown 타입을 string 타입으로 타입 단언


// const 단언

let num4 = 10 as const; // 넘버 리터럴 타입으로 추론됨

let cat = {
    name: "야옹이",
    color: "yellow"
} as const; // readonly 타입으로 추론

// cat.name = ""// readonly -> 수정x



// Non Null 단언

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "류주아"
}

const len: number = post.author!.length; // 자동으로 ? 생김 -> 옵셔널 체이닝 -> 값이 없으면 null이나 undefined 리턴
// ! 로 오류 해결 -> 값이 있다고 확신주는 것 // null이나 undefined가 아니라고 명시



