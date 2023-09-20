import { Link } from "@remix-run/react";

export default function Post({ post }) {
    return (
        <div className='post shadow p-5 bg-slate-50'>
            <div style={{ display: "flex" }}>
                <Link to={`/posts/${post.id}`}>
                    <h2 className=' text-2xl hover:underline cursor-pointer'>{post.title}</h2>
                </Link>
            </div>
            <p className='mt-5'>{post.body}</p>
        </div>
    )
}
