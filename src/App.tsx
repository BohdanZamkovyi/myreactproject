import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./models/IUser";
import User from "./components/user/User";

const App: FC = () => {
    function clickHandler(id: number) {
        setUserId(id);
    }

    const [users, setUsers] = useState<IUser[]>([]);

    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com//users')
            .then(response => response.json())
            .then(users => setUsers(users));
        console.log(users);
    }, []);
    return (
        <>
            {users.map(({id, name, username}) => {
                return <User key={id} id={id} name={name} username={username} clickHandler={clickHandler}/>
            })}
            <h2>{userId}</h2>
        </>
    )
}

export default App;
