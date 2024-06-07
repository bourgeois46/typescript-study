// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed()
// value => string : toUpperCase()
// value => Date : getTime()
// value => Person : name은 age

function func(value: number | string | Date | null | Person) {
    value;
    // value.toFixed();
    // value.toUpperCase();

    if (typeof value === "number") {
        console.log(value.toFixed()); // number 타입으로 보장, 좁은 타입
    }
    else if (typeof value === "string") {  // string 타입으로 보장, 좁은 타입
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) { // 왼쪽이 오른쪽의 인스턴스냐? true: false
        console.log(value.getTime()); // Date 타입으로 보장 // null은 통과x -> error 해결
    }
    // else if (value instanceof Person) {}// Person은 클래스가 아닌 타입별칭으로 만든 일종의 객체 타입이므로 사용x
    
    else if (value && 'age' in value) { // true, false 반환 // value 중 age 프로퍼티를 가질 수 있는 건 Person 밖에 없음
        console.log(`${value.name}은 ${value.age}살 입니다`); 
    }
}

