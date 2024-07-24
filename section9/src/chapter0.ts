// 조건부 타입
// 조건에 따라 타입을 결정한다

type A = number extends string ? string : number; // number

type ObjA = {
    a: number; 
}

type ObjB = {
    a: number; 
    b: number; 
}

type B = ObjB extends ObjA ? number : string; // number


// 제니릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number> // T = number , varA = string

let varB : StringNumberSwitch<string> // T = string , varB = number


// 오버로드 시그니쳐
function removeSpaces<T>(text :T) : T extends string ? string : undefined

function removeSpaces(text : any) { // 함수 내부에서는 조건부 타입의 결과를 알 수 없다 -> as any 로 타입 단언 or 오버로드 시그니쳐
    if (typeof text === 'string')
    return text.replaceAll(" ", "");
    else
    return undefined;
}

let result = removeSpaces("hi I'm bourgeois"); // T = string, result = string
result.toUpperCase();

let result2 = removeSpaces(undefined); // T = undefined, result2 = undefined


