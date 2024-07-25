// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// T에 Post처럼 객체 타입이 들어온다
// keyof -> 특정 객체 타입으로 부터 모든 key를 union 타입으로 추출하는 연산자
// keyof T -> title, tags, content
// key 에 하나씩 매핑

// T[key] -> 인덱스드 액세스 타입 -> 특정 객체, 배열로부터 특정 프로퍼티 추출

type Partial<T> = {
    [key in keyof T]?: T[key];
}

// 타입 변수로 전달한 Post 타입의 모든 프로퍼티를 선택적으로 만듦
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
}


// Required<T>
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
    [key in keyof T]-? : T[key]; // ?를 뺀다는 뜻
}

const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
}


// Readonly<T>
// -> 읽기전용 수정불가
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost : Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};

// readonlyPost.content = "";



