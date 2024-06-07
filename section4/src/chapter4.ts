// 사용자 정의 타입가드

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal) : animal is Dog { // 반환값 타입으로 타입 가드 설정
    return (animal as Dog).isBark != undefined // 타입 단언 이용
    // 리턴값이 참이면 인수로 전달한 값의 타입이 Dog 이다.
}

function isCat(animal: Animal) : animal is Cat {
    return (animal as Cat).isScratch!= undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)){
        // 강아지
        animal
    }
    else if ("isScratch" in animal){
        // 고양이
        animal
    }

}

// 타입스크립트는 우리가 직접 만든 함수의 반환값을 가지고는 타입을 잘 좁혀주지 않는다. -> 타입 가드