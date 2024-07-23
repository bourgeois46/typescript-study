// 타입변수 응용

// 1)
 
function swap<T, U>(a:T, b:U) {
    return [b, a];
}

const [a, b] = swap("1", 2); // 두 개가 달라버리면 에러 -> U 추가


// 2)

// function func(...rest){}

function returnFirstValue<T>(data: [T, ...unknown[]]){ // 첫 번째 요소 타입은 T이고 나머지 요소는 여러 개 들어올 것 같은데 그것들의 타입은 모른다
    return data[0]; // T -> number // 첫 번째 요소 
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]); // T는 number로 할당된다
// "hello"


// 3)

interface InterfaceA {
    length: number;
}

interface InterfaceB extends InterfaceA {}

function getLength<T extends {length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({length: 10}); // 10

// let var4 = getLength(10); // 제한


