console.log('Yahallo!');
let age = 10;
if (age < 50)
    age += 10;
console.log('Age: ' + age);

let person: [number, string] = [1, 'John'];
person.push(2);

function test(num: number): number {
    return 0;
} 

import { calculateTax } from "./tax";

let tax = calculateTax(2);