// 템플릿 리터럴 타입

type Color = 'red' | 'green' | 'blue';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

// const coloredAnimal : ColoredAnimal = '';

// 문자열로 여러 상황을 표현할 때 사용
