// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) { // 리턴 타입 명시 안해도 알아서 추론
    return a + b;
}


// 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number) => a + b;



// 함수의 매개변수

function introduce(name = "류주아", age: number, tall?: number){ // 타입 정의 안해도 기본값 기준으로 잘 추론
    console.log(`name : ${name}`);
    if (typeof tall === "number"){
        console.log(`tall: ${tall + 10}`);
    }
}

introduce("류주아", 23, 161);
introduce("류주아", 23); // 선택적 매개변수로 만들면 오류 안남


// 선택적 매개변수를 사용하려면 필수 매개변수가 앞에 와야된다.


// getSum(...rest: number[])
function getSum(...rest: [number, number, number]){ // 매개변수 개수 고정 -> 튜플 -> 3개의 인수만 전달됨
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
// getSum(1, 2, 3, 4, 5); // 15