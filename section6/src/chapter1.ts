// 타입스크립트의 클래스


const employee = {
    name: "류주아",
    age: 23,
    position: "developer",
    work(){
        console.log("일함");
    },
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work(){
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age:number, position:string, officeNumber: number){
        super(name, age, position); // 타입스크립트에서는 super 호출 필수
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("류주아", 23, "개발자");
console.log(employeeB);

const emoloyeeC: Employee = { // 타입스크립트의 클래스는 타입으로도 이용 가능하다
    name: "",
    age: 0,
    position: "",
    work(){}
};