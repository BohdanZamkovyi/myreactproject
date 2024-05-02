import React, {FC, useEffect, useState} from 'react';
import IUserModel from "../../model/IUserModel";
import UserComonent from "../user/UserComonent";
import {getAllUsers} from "../../services/users.api.servisec";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);

    const clickHandler = (id: number): void => {
        setUserId(id);
    }
    return (
        <div>
            {users.map(({id, name, username, email}, index) => {
                return <UserComonent key={index} id={id} name={name} username={username} email={email} clickHandler={clickHandler}/>
            })}
            <h2>{userId}</h2>
        </div>
    );
};

export default UsersComponent;