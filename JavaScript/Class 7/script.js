const finalPrice = (price, disc) => {
    return price - (price * disc / 100)
};

// console.log(finalPrice(1500, 10));

const price = function (price, disc) {
    return price - (price * disc / 100)
}
// console.log(price(10, 10));

let marks = [90, 80, 85, 55, 60, 65, 75]
let newMarks = marks.forEach((item) => {
    // console.log(item)
    // if (item > 60) {
    //     return item
    // }
    // return item > 60
}
)
// console.log(newMarks);

//! map()
let filterMarks = marks.map((item, i) => {
    // console.log(item);
    // console.log(i);
    // return item + 60
})
// console.log(filterMarks);

//! filter()
let passMark = marks.filter((mark) => {
    return mark > 65
})
// console.log(passMark);

//! reduce()
let total = marks.reduce((sum, item) => sum += item, 0)
console.log(total);
