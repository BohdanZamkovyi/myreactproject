import React, {FC} from 'react';
import IUserModel from "../../model/IUserModel";

type typeWithChildren<T> = T & { children?: React.ReactNode } & { clickHandler: (id: number) => void };
const UserComonent: FC<typeWithChildren<IUserModel>> = ({id, name, username, email, clickHandler}) => {
    return (
        <div>
            {id} - {name}
            <button onClick={()=>{
                clickHandler(id);
            }}>Show Detail Info</button>
        </div>
    );
};

export default UserComonent;