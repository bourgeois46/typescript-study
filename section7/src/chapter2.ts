
// map 메서드

import { parse } from "path";

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]


function map<T, U>(arr: T[], callback: (item: T) => U){ // T = string, U = number
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2); // it의 타입은 arr의 배열 요소의 타입과 같아야 된다
map(['hi', "hello"], (it) => it.toUpperCase()); 
// map(['hi', "hello"], (it) => parseInt(it)); // number != string





// forEach

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr:T[], callback:(item:T) => void) {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it) => console.log(it.toFixed)); // it는 arr2 배열의 요소 타입이여야 된다

forEach(['123', '456'], (it) => {it;});