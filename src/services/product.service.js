import Axios from "./caller.service";

let getAllProducts = () => {
    return Axios.get('/api/products')
}

let getProduct = (id) => {
    return Axios.get('/api/products/'+id)
}

let updateProduct = (id, formData) => {
    return Axios.patch('/api/products/'+id, formData, { headers: {'Content-Type': 'multipart/form-data'}})
}

let createProduct = (formData) => {
    return Axios.post('/api/products/', formData, { headers: {'Content-Type': 'multipart/form-data'} })
}

let uploadImg = (formData) => {
    Axios.post('/api/products', formData, { headers: { 'Content-Type': 'multipart/form-data' }})
}

let deleteProduct = (id) => {
    return Axios.delete('/api/products/'+id)
}

export const productService = {
    deleteProduct,
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    uploadImg
}