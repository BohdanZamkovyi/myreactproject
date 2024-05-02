import axios, {AxiosResponse} from "axios";
import {IUser} from "../../models/User";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "Content-Type" : 'application/json'
    }
})
const getAllUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get('/users')
}
export {
    getAllUsers
}