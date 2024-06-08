// 인터페이스와 클래스

interface CharacterInterface { // 인터페이스는 무조건 public 필드만 정의할 수 있다 -> 다른 접근제어자가 필요하면 따로 정의한다.
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
      constructor(public name: string, public moveSpeed: number, private extra: string){}

    move():void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}