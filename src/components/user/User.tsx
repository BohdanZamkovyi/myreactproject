import React, {FC} from 'react';
import IUser from "../../models/IUser";

type userWithChildren<T> = T & { children?: React.ReactNode } & { clickHandler: (id:number) => void };
const User: FC<userWithChildren<IUser>> = ({name, id, username, clickHandler}) => {
    return (
        <div>
            <p>Id: №{id} My name is {name} and my username: {username} <button onClick={()=>clickHandler(id)}>click</button></p>
        </div>
    );
};

export default User;