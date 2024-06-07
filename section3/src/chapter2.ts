// Unknown 타입

function UnknownExam() {
    let a: unknown = 1; // 업캐스팅
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar; // 다운캐스팅 x
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// Never 타입

function neverExam() {
    function neverFunc(): never { // 반환값이 공집합이다. 아무것도x
        while (true) {}
    }    

    let num: number = neverFunc(); // 업캐스팅
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 1; // 다운캐스팅
    // let never2: never = "string";
    // let never3: never = true;
    // never 타입은 어떤값도 저장 x
}

// void 타입

function voidExam() {
    function voidFunc(): void { 
        console.log("hello"); 
        return undefined; // 업캐스팅 
    }

    let voidVar: void = undefined; // 업캐스팅
}

// any 타입
function anyExam () {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 다운캐스팅 허용
    undefinedVar = anyVar; // 다운캐스팅 허용

    // neverVar = anyVar; // 예외) 다운 캐스팅 x

    // any는 자기한테 오는, 자기가 가는 다운캐스팅 모두 가능
    // 위험한 타입이므로 사용하지 않는 것이 좋다.
}
