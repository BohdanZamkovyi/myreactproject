import React, {FC} from 'react';
import IPost from "../../models/IPost";
type postWithChildren = {post: IPost} & {children?: React.ReactNode};
const PostComponent:FC<postWithChildren> = ({post: {title, body}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;