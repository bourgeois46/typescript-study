// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

function func() {
    type User = {};
}

let user : User = {
    id: 1,
    name: '류주아',
    nickname: 'bourgeois',
    birth: "2002.04.05",
    bio: '안뇽',
    location: '서울'
}

let user2 : User = {
    id: 1,
    name: '류주하',
    nickname: 'bourgeois',
    birth: "2002.04.05",
    bio: '안뇽',
    location: '서울'
}


// 인덱스 시그니처

type CountyCodes = {
    [key : string]: string; // key , value
}

let countyCodes: CountyCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
    [key : string]: number; 
}

let countryNumberCodes: CountryNumberCodes = {
   /* Korea : 410,
    UnitedState : 840,
    UnitedKingdom : 826,*/
}