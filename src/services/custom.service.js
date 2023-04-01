import Axios from "./caller.service";

let getAllContents = () => {
    return Axios.get('/api/content')
}

let getContent = () => {
    return Axios.get('/api/content')
}

let updateContent = (id, formData) => {
    return Axios.patch('/api/content/'+id, formData, { headers: {'Content-Type': 'multipart/form-data'}})
}

let createPost = (formData) => {
    return Axios.post('/api/content', formData, { headers: {'Content-Type': 'multipart/form-data'} })
}

let postContent = (id, formData) => {
    return Axios.patch('/api/content/'+id, formData, { headers: {'Content-Type': 'multipart/form-data'} })
}

// let uploadContent = (formData) => {
//     Axios.post('/api/content', formData, { headers: { 'Content-Type': 'multipart/form-data' }})
// }

let deleteContent = (id) => {
    return Axios.delete('/api/content/'+id)
}

export const customService = {
    postContent, getContent, createPost
}