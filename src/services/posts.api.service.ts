import axios, {AxiosResponse} from "axios";
import IPost from "../models/IPost";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
})

const getPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return instance.get('/posts')
}
const getPostOfId = (postId: number): Promise<AxiosResponse<IPost[]>> => {
    return instance.get(`/posts/${postId}`);
}
const getPostsOfUserId = (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return instance.get(`/posts?userId=${userId}`)
}
export {
    getPosts, getPostOfId, getPostsOfUserId
}