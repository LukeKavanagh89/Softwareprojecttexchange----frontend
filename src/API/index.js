import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

//Intercepters for requests
API.interceptors.request.use((request) =>{
    if(localStorage.getItem('Account')){


        request.headers.Authorization = `Provider ${JSON.parse(localStorage.getItem('Account')).token}`;
    }

    return request;
});


export const fetchPosts = () => API.get('/posts');
//Create/Update 
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatePost) => API.patch(`posts/${id}`, updatePost);

//Like Event or Delete it 
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//Sign In or Sign up
export const signin = (FormData) => API.post('/users/signin', FormData);
export const signup = (FormData) => API.post('/users/signup', FormData);