// 프로미스

const promise = new Promise<number>((resolve, reject)=>{ // reject() -> 실패의 이유
    setTimeout(() => {
       // resolve(20); // 20 -> 비동기 작업의 결과값 // 성공
       reject("~~때문에 실패")
    }, 3000);
})

promise.then((response)=>{ // resolve에서 전달한 값이 들어옴
    console.log(response * 10); // 20
})

promise.catch((err)=>{
    if (typeof err === "string"){
        console.log(err); // 프로젝트 상황에 맞게 타입 좁히기
    }
})

// 프로미스는 제네릭 클래스를 기반으로 타입이 선언되어있기 때문에
// 타입변수 <number>로 비동기 처리의 결과값의 타입을 정의해줄 수는 있지만
// reject, 실패했을 때의 타입은 정의해 줄 수 없다

// 타입변수 정의를 안하면 기본적으로 비동기 작업 처리의 결과값의 타입이 unknown으로 추론된다



// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post> { // new Promise<Post> 보다 : Promise<Post> 방식 추천
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    })
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    post.id
})