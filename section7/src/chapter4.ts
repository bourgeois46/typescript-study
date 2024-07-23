// 제네릭 클래스

class List<T> {
    constructor(private list : T[]){}
        //  this.list = list; // private -> 생략 가능

    push(data : T) {
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    } 
}

// 제네릭 인터페이스, 제네릭 타입 변수와 다르게 클래스의 생성자를 호출할 때 타입을 명시하지 않아도 추론된다
// new List<number>([1, 2, 3]); // 이렇게 할 필요 X

const numberList = new List([1, 2, 3]); // 인수로 number 타입의 배열 전달 -> T가 number로 추론된다
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["apple", "banana", "cherry"]); // 인수로 string 타입의 배열 전달 -> T가 string으로 추론된다
stringList.push("hello");