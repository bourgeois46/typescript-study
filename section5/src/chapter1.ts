// 인터페이스의 확장(상속)

interface Animal { // type도 가능
    name: string;
    color: string;
}

interface Dog extends Animal {
    // name: "hello"; // 재정의 -> 원본 프로퍼티 타입(string)의 서브 타입이여야 가능
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 다중 확장

interface DogCat extends Dog, Cat {
    name: string;
    color: string;
    isBark: true;
    isScratch: true;
}