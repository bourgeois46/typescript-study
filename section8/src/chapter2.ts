// keyof 연산자 + Type
// 객체 타입으로부터 프로퍼티의 key들을 뽑아와서 union 타입으로 만든다


// 객체 타입에 적용한다

type Person = typeof person // person 변수를 추론해서 타입 정의

/*interface Person {
    name: string;
    age: number;
}*/

// Person 객체 타입의 모든 프로퍼티의 key를 union 타입으로 추출한다

function getProperties(person: Person, key: keyof Person){ // key: "name"|"age" // key 타입을 정의할 때 union 사용하면 문제가 생길 수 있다
    return person[key];
}
// key: keyof typeof person 도 가능 
// typeof person은 객체 타입

// 무조건 타입에만 사용 가능하다 -> 변수 person을 사용해서 keyof person X

const person = {
    name: "류주아",
    age: 23,
};

getProperties(person, "name"); // 류주아


