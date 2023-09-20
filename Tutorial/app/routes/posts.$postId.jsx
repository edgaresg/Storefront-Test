import { useLoaderData, useParams, Link, Form } from '@remix-run/react';
import { db } from '../services/db';
import invariant from 'tiny-invariant';
import { Response } from '@remix-run/node';

export const loader = async ({ params }) => {
    invariant(params.postId, "Missing contactId param")
    const post = await db.post.findUnique({
        where: {
            id: parseInt(params.postId)
        }
    })

    if (!post) throw new Response("Not found", {status: 404})

    return { post }
}

export default function SinglePost() {
    const { post } = useLoaderData()

    return (
        <div key={post.id} className='post shadow p-5 bg-slate-50'>
            <div style={{ display: "flex" }}>
                <Link to={`/posts/${post.id}`}>
                    <h2 className=' text-2xl hover:underline cursor-pointer'>{post.title}</h2>
                </Link>
            </div>
            <div>
            <p className='mt-5'>{post.body}</p>
            </div>
            <div className=' flex gap-5 mt-10'>
                <Form action='edit'>
                    <button type='submit' className='bg-blue-600 p-2 w-20 text-white grid place-items-center rounded hover:opacity-50 cursor-pointer'>Edit</button>
                </Form>
                <Form action='destroy' method='post' onSubmit={(event) => {
                    const res = confirm("Secure?")
                    if (!res) {
                        event.preventDefault()
                    }
                }}>
                    <button type='submit' className='bg-red-600 p-2 w-20 text-white grid place-items-center rounded hover:opacity-50 cursor-pointer'>Delete</button>
                </Form>
            </div>
        </div>
    );
}