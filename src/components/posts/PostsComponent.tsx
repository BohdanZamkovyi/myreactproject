import React, {FC} from 'react';
import IPost from "../../models/IPost";
import PostComponent from "../post/PostComponent";

type postsWithChildren = {posts: IPost[]} & {children?: React.ReactNode}
const PostsComponent:FC<postsWithChildren> = ({posts}) => {
    console.log(posts);
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;