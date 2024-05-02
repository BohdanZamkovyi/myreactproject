import IUserModel from "../model/IUserModel";


const getAllUsers = (): Promise<IUserModel[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}

export {
    getAllUsers
}