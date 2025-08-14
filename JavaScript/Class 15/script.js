//! Promise in JS

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((resolve) => {
//         // console.log(resolve.json());
//         resolve.json()
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     })
//     .catch((reject) => {
//         console.log(reject);
//     })

const getData = async () => {
    let response = await fetch("https://api.escuelajs.co/api/v1/products")
    console.log(response);
    const data = await response.json()
    console.log(data);
}
getData()