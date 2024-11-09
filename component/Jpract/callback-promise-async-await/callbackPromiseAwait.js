const fetchProducts = (callback) => {
    setTimeout(() =>{
        callback([{id:1, productName : 'laptop'}])
    })
}

const getDetails = (data,callback) => {
    setTimeout(() => {
        callback(data)
    })
}

const orderProduct = (data,callback) => {
    callback(data)
}

fetchProducts((data) => {
    getDetails(data,(productD) => {
        orderProduct(productD,(orderProduct) => {
            console.log(orderProduct)
        })
    })
})