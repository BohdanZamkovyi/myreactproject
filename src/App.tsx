import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./models/IUser";
import User from "./components/user/User";
import {getUsers} from "./services/user.api.service";
import IPost from "./models/IPost";
import {getPostsOfUserId} from "./services/posts.api.service";
import PostsComponent from "./components/posts/PostsComponent";

const App: FC = () => {
    function clickHandler(id: number) {
        setUserId(id);
    }

    const [users, setUsers] = useState<IUser[]>([]);

    const [userId, setUserId] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers().then((users) => setUsers(users.data))
    }, []);
    useEffect(() => {
        if (userId){
            getPostsOfUserId(userId).then(({data}) => setPosts(data));
        }
    }, [userId]);

    return (
        <>
            {users.map(({id, name, username}) => {
                return <User key={id} id={id} name={name} username={username} clickHandler={clickHandler}/>
            })}
            <PostsComponent posts={posts}/>
        </>
    )
}




export default App;
