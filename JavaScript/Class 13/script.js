class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`My name is ${this.name}, and my age is ${this.age}`);
    }
}
const p1 = new Person("XYZ", 20)
// p1.greet()

class Raju extends Person {
    greet() {
        console.log(`Name is ${this.name}, age is ${this.age}`)
        console.log("Hello");
    }
}

const raju = new Raju("Raju", 20)
// raju.greet()


// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// setTimeout(() => {
//     console.log("Five");
// }, 3000)
// console.log("Six");
// console.log("Seven");
// setTimeout(() => {
//     console.log("Eight");
// }, 1000)
// console.log("Nine");


// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{
//                 ()=>{

//                 }
//             }
//         }
//     }
// }

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
getUser(1, (user) => {
    getUserPosts(user.id, (posts) => {
        getPostComments(posts[0].postId, (comments) => {
            console.log("Comments: ", comments);
        });
    });
});