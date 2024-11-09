// const fetchProducts = (callback) => {
//     setTimeout(() =>{
//         callback([{id:1, productName : 'laptop'}])
//     })
// }

// const getDetails = (data,callback) => {
//     setTimeout(() => {
//         callback(data)
//     })
// }

// const orderProduct = (data,callback) => {
//     callback(data)
// }

// fetchProducts((data) => {
//     getDetails(data,(productD) => {
//         orderProduct(productD,(orderProduct) => {
//             console.log(orderProduct)
//         })
//     })
// })


const fetchProducts = () => {
    return new Promise((resolve,reject) => {
        resolve([{id:1, productName : 'laptop'}])
    })
}

const getDetails = (data) => {
    return new Promise((resolve,reject) => {
        resolve(data)
    })
}

const orderProduct = (data) => {
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
}

// fetchProducts().then((products) => {
//     return getDetails(products)
// }).then((cart) => {
//     return orderProduct(cart)
// }).then((order) => {
//     console.log(order)
// }).catch((err) => { console.log('err',err)})


createOrder = async () => {
 try {
    const products = await fetchProducts();

    const cart = await getDetails(products)

    const order = await orderProduct(cart)
    console.log(order,'async await')
 } catch (error) {
    console.error("Error",error)
 }
}

createOrder()