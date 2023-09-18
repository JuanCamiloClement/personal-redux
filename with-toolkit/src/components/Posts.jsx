import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, getAllPosts } from '../store/slices/postsSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector(selectPosts);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;