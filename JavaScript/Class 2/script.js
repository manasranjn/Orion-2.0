//! Pimitive Datatype
//? number
let n1 = 10
let n2 = 1.5
let n3 = -20
// console.log(typeof n3);

//? boolean
// let b = true
// console.log(typeof b);

//? string
let s1 = 'a'
let s2 = "Hello"
let s3 = "1234567"
// console.log(typeof s1);

//? undefined
let u
// console.log(u);
// console.log(typeof u);

//? null
let n = null
// console.log(n);
// console.log(typeof n);

//? Symbol
let sy = Symbol(1234567)
// console.log(typeof sy);
// console.log(sy);

//? BigInt
let big = BigInt(234567897654321)
// console.log(typeof big);


//! Non-Primitive types
//? Array
let arr = [1, 2, "Hi", true, undefined, null]
// console.log(arr);
// console.log(typeof arr);
// console.log(arr[2]);

//? Object
let obj = {
    name: "ABCD",
    age: 20,
    mark: 9.5,
    course: "B.Tech"
}
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.course);
// console.log(obj["name"]);

//? function
function example() {
    console.log("This is a function");
}
// example()

//! Operator
//? Arithmetic Operator
let val1 = 4
let val2 = 3

// let addition = val1 + val2
// console.log("Addition=", addition);

// let sub = val1 - val2
// console.log("Subtraction=", sub);

// let multi = val1 * val2
// console.log("Multiplication", multi);

// let div = val1 / val2
// console.log("Division= ", div);

// let mod = val1 % val2
// console.log("Modulus=", mod);

// let expo = val1 ** val2
// console.log("Exponent= ", expo);

//? Assignment Operator (=,+=,-+,*=,/=,%=,**=)
let ab = 20
let xy = 90

// ab += xy // ab = ab+xy
// console.log(ab);

// ab -= 10 // ab = ab-10
// console.log(ab);

// ab *= 5
// console.log(ab);

// ab /= 4
// console.log(ab);

// ab %= 3
// console.log(ab);

// ab **= 6 // ab = ab ** 6
// console.log(ab);

//! Comparision Operator
let a = 10
let b = 20
let c = 10
let d = "10"

// console.log(a == b);
// console.log(a == d);
// console.log(a === b);
// console.log(a === d);
// console.log(a != b);
// console.log(a != c);
// console.log(a !== b);
// console.log(a !== d);
// console.log(a !== c);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

//?Logical operator Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log("Logical operator");

let first = true
let second = false
let third = true

// console.log(first && second); //f
// console.log(first && third); //t
// console.log(first || second); //t
// console.log(first || third); //t
// console.log(!first);  //f
// console.log(!second); //t

//?Unary operator
let val = 10

console.log("Pre increment=", ++val); //11
console.log("Post increment=", val++); //11
console.log(val); //12
console.log(--val); //11
val++ //11
val-- //12
++val // 12
console.log(val++); // 12
console.log(val); // 13
console.log("Pre Decrement= ", --val); //12
console.log("Post Decrement= ", val++); // 12
console.log(val); //13 