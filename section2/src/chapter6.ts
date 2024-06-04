// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = 'hello';

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num =anyVar;


// unknown

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // error!
// unknownVar.toUpperCase(); // error!

if (typeof unknownVar === 'number') { // 타입 정제
    num = unknownVar;
}

// 런타임 에러를 일으킬 가능성이 낮은 unknown 타입을 사용하는 것이 좋다.
