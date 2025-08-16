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
// getData()

const box = document.getElementById("box")

fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
        result.map((product) => {
            // console.log("Product is", product);

            const productName = document.createElement("h1");
            const description = document.createElement("p")
            const price = document.createElement("p")
            const image = document.createElement("img")

            productName.innerText = product.title
            description.textContent = product.description
            price.innerText = "Price: $" + product.price

            // image.setAttribute("src", product.images[0])
            product.images.map((i) => {
                console.log(i);
                image.setAttribute("src", i)
            })

            box.append(productName, description, price, image)
        });
    })
    .catch((err) => {
        console.log(err);
        const errorMsg = document.createElement("p")
        errorMsg.innerText = "Failed to fetch Data"

        box.append(errorMsg)
    });