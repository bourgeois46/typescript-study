// 접근 제어자
// access modifier
// => public, private, protected

class Employee {
    // 필드
    // private name: string;
    // protected age: number;
    // public position: string;

    // 생성자 -> 생성자에 접근제어자 만들면 필드 정의, 초기화는 생략해야 한다
    constructor(private name: string, protected age: number, public position: string){
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    work(){
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age:number, position:string, officeNumber: number){
        super(name, age, position); 
        this.officeNumber = officeNumber;
    }

    // 메서드
    func(){
        // this.name; // private property는 파생 클래스에서도 접근 x
        this.age; // protected property는 파생 클래스에서도 접근 가능
        this.position;
        this.officeNumber; 

    }
}

const employee = new Employee("류주아", 23, "developer");
// employee.name = "김원필";
// employee.age = 31;
employee.position = "디자이너"


console.log(employee);