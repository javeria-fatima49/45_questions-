//24 2Question#

let car : string = 'cultus';
let age : number =25;
let numbers:number[] =[1,2,3,4];


// console.log("Is car.toLowercase() =='cultus'? I predict true.");
// console.log(car.toLowerCase() =='cultus');

// console.log("Is car === car.toLowercase()? I predict false.");
// console.log(cars === car.toLowerCase());

   //numercic test
 //#Tests for equality and inequality with strings
console.log("Is age  != 25? I predict true.");
console.log(age != 25);

console.log("Is age  != 30? I predict false.");
console.log(age != 30);

console.log("Is age  == 25? I predict true.");
console.log(age == 25);

console.log("Is age  != 30? I predict true.");
console.log(age != 30);

//#Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Is age   > 30? I predict true.");
console.log(age > 30);

console.log("Is age   <= 25? I predict true.");
console.log(age <= 25);
// test #ture logic operators
console.log("Is age   > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);

//test # false
console.log("Is age   > 30 || age < 18? I predict true.");
console.log(age > 30 || age < 18);

console.log("Is 3  in number? I predict true.");
console.log(3 in numbers);

console.log("Is 5 not in numbers? i predict true.");
console.log(5 in numbers);

