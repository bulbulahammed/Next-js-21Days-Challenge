
const PostsPage = async() => {


    const res = await fetch("http://localhost:5000/posts",{
        cache: "no-store",
    });
    const posts = await res.json();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="m-10">
                <h2>Welcome to posts page</h2>
                <p>Total Postsssss:{posts.length}</p>
                <div className="w-full">
                    {
                    posts.map((post)=> (
                        <div key={post.id} className="card w-full bg-base-100 shadow-xl my-5">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>{post.like_count}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">See More</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PostsPage;