import useFetch from "../../../../../core/hooks/useFetch";
import PostMetadata from "../../../components/Post/PostMetadata/PostMetadata";
import PostStats from "../../../components/Post/PostStats/PostStats";
import { getPosts } from "../../../services/post";
import { Post } from "../../../types/post";

const PostList = () => {
    const { data, loading, error } = useFetch<Post>(getPosts);

    if (error) {
        return <span>{error}</span>;
    }


    return (
        <div>
            {loading && <span>Loading...</span>}
            {data.map((post, key) => (
                <div>
                    <PostMetadata
                        createdAt={post.postDate}
                        fullName={post.user.name}
                        username={post.user.username}
                        verified
                    />
                    <span key={`post-${key}`}>{post.content}</span>
                    <PostStats likes={post.likes} retweets={post.retweets} stats={post.stats} comments={post.comments}></PostStats>
                </div>
            ))}
        </div>
    )
}

export default PostList;