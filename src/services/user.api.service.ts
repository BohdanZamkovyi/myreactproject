import IUser from "../models/IUser";
import axios, {AxiosResponse} from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type": "application/json",
    }
})
const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return AxiosInstance.get('/users')
}
export {getUsers};