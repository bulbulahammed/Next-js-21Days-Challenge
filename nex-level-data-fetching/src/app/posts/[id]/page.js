import Link from "next/link";

export async function generateStaticParams() {
    
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();
    const ids = posts.map((post)=>{
        return {
            id: post.id + "",
        }
    })
    return ids;
  }

const PostDetails = async({params}) => {
    
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();

    return (
        <div className="card w-md bg-base-100 shadow-xl my-5 m-20">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.like_count}</p>
                <div className="card-actions justify-end">
                    <Link href="/posts">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;