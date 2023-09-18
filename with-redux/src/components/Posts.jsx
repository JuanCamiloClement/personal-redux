import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/actions/posts.actions";

const Posts = () => {
    const { posts, loading, error } = useSelector((state) => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (loading) {
        return <h4>Loading...</h4>
    }

    if (error) {
        return <h4>Error!</h4>
    }

    return (
        <>
            <h2>Posts</h2>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Posts;