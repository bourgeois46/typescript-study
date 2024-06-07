// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가


// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b; // 업캐스팅 o
// b = a; // 다운캐스팅 x


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = () => {};
let d: D = () => {};

// c = d; // 업캐스팅 x
d = c; // 다운캐스팅 o


type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc; // 이게 허용이 되면(업캐스팅)
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    //console.log(animal.color); // 이런 말도안되는 코드가 허용이 되어버리기 때문 
    // Animal 타입에는 color 프로퍼티가 없는데 이게 허용이 되니까
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name); // 이미 Dog 타입은 Animal 타입의 프로퍼티를 다 갖고 있어 문제 x
}



// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;

// 할당하려고 하는 쪽의 함수의 타입의 매개변수의 개수가 더 적을 때만 함수가 호환이 된다.
// 단, 타입이 같은 매개변수가 있어야 된다.


