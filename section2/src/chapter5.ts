// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0, // 숫자 할당 제거해도 0부터 자동으로 할당
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name : "김원필",
    role: Role.ADMIN, // 0
    Language: Language.korean, // "ko"
}

const user2 = {
    name : "박성진",
    role: Role.USER, // 1
}

const user3 = {
    name : "윤도운",
    role: Role.GUEST, // 2
}

console.log(user1, user2, user3);
