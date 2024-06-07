// 인터페이스

interface Person {
    readonly name: string;
    age?: number;
    sayHi() : void; // sayHi 처럼 이름을 앞에 붙여야 한다.
    sayHi(a: number, b: number) : void;
} // 메서드 오버로딩을 구현하려면 호출 시그니처 사용 권장

type Func = {
    (): void; 
};

const func: Func = () => {};




type Type1 = number | string;
type Type2 = number & string;
// 인터페이스는 타입별칭과 달리 유니온, 인터섹션 x




const person: Person | number ={
    name: "류주아",
    // age: 23,
    sayHi: () => {
        console.log("Hi!");
    }
};

// person.name  = "윤도운";


person.sayHi();
person.sayHi(1, 2);