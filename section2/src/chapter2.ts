// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'im', 'bourgeois'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string | boolean)[] = [1, "hello", true];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr : number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플
// 길이와 타입이 고정된 배열

let tup1:[number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); // 배열 메서드를 사용할 때는 튜플의 길이 제한 x
tup1.pop(); 

const users : [string, number][] = [
    ["강영현", 1],
    ["김원필", 2],
    ["윤도운",3],
  //  [4, "박성진"], 인덱스 위치에 따른 순서를 지켜야할 때 유용

]
