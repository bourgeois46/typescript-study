// Mapped Type
// 객체 타입에서만 사용 가능
// 인터페이스 x -> 타입 별칭으로 사용

interface User {
    id: number; 
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id'|'name'|'age']?: User[key]; // mapped type이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 된다
}

type BooleanUser = {
    [key in 'id'|'name'|'age']: boolean;
}

type BooleanUser1 = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}


// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    // ...기능
    return {
        id: 1,
        name: "류주아",
        age: 23,
    }
}

// const user = fetchUser();
// user.id = 1;

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User): void {
    //... 수정하는 기능
}

updateUser({
    id: 1,
    name: "류주아",
    age: 24,  // age를 24로 수정
})
