// 인덱스드 엑세스 타입
// 복잡한 타입으로 부터 필요한 것만 추출하는 방법


// 인터페이스는 객체 타입 정의에만 특화되어 있어 배열에는 적합 x

// 1) 객체 

// 2) 배열

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

// 인덱스 author은 값이 아니라 "타입"이다! 타입만 들어올 수 있다

// const key = "author"; // "author" 대신 key를 넣을 수 없다

// (author: Post["author"]["id"] // 중첩해서 사용 가능

function printAuthorInfo(author: PostList[number]["author"]) { // number -> PostList 요소의 타입을 뽑아옴 // "author" -> 그 객체 타입으로부터 author 프로퍼티의 타입을 뽑아옴
    console.log(`${author.name} - ${author.id}`)
}

const post : PostList[number] = { // number 타입(숫자도 가능)을 넣어주면 배열 타입으로부터 하나의 요소의 타입만 가져올 수 있다 // 단, 이는 값이 아닌 "타입"이다
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "류주아",
        age: 23,
    },
};

printAuthorInfo(post.author);


// 3) 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number]; // number, string, boolean 세 타입의 union 타입으로 추출한다


