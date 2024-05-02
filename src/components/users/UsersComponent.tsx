import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/User";
import {getAllUsers} from "../../services/users/users.api.service";
const UsersComponent:FC = () => {
const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => console.log(users))
    }, []);
    return (
        <div>

        </div>
    );
};

export default UsersComponent;