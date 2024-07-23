// 제네릭 인터페이스

interface KeyPair<K, V> { // <K, V> => 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
    key: K,
    value: V;
}

let keyPair: KeyPair<string, number> = { // 타입변수에 타입을 직접 할당해야 된다
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = { 
    key: true,
    value: ["1"],
}



// 인덱스 시그니쳐

interface NumberMap {
    [key: string]: number;
}

let NumberMap : NumberMap = {
    key: -1231,
    key2: 123123,
}



interface Map<V> {
    [key: string] : V;
}

let stringMap : Map<string> = {
    key: "value",
};

let booleanMap : Map<boolean> = {
    key: true,
};




// 제네릭 타입 별칭
// 제네릭 인터페이스와 유사

type Map2<V> = {
    [key: string] : V;
}

let stringMap2 : Map2<string> = {
    key: "hello",
};




//  제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 / 개발자 유저


interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    /*if (user.profile.type !== 'student' )  { // 타입 좁히기 없어도 됨
        console.log("돌아가");
        return;
    } 

     user.profile Student로 잘 좁혀짐*/

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); // error!

const developerUser : User<Developer> = {
    name : "강영현",
    profile: {
        type: "developer",
        skill: "Typescript",
    },
}

const studentUser : User<Student> = {
    name: "류주아",
    profile: {
        type: "student",
        school: "동덕여자대학교",
    },
}

