import { json, redirect } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import { db } from "../services/db"

export const action = async ({params, request}) => {
    const data = Object.fromEntries(await request.formData())
    await db.post.update({where: {id: parseInt(params.postId)}, data})
    return redirect(`/posts/${params.postId}`)
}

export const loader = async ({params}) => {
    const post = await db.post.findUnique({ where: {id: parseInt(params.postId)}})
    return json({post})
}

export default function EditPost() {
    const {post} = useLoaderData()
  return (
    <div>
        <h2 className=" text-4xl">Edit post</h2>
        <section className=" mt-10 flex">
            <Form method='POST' className="w-[50%] flex gap-10 flex-col">
                <div>
                    <label htmlFor='title'>Title </label><br />
                    <input 
                        placeholder='Title of Post' 
                        id='title' 
                        type='text' 
                        name='title' 
                        className="w-full p-3 rounded" 
                        defaultValue={post.title} 
                    />
                </div>
                <div>
                    <label htmlFor='content'>Body </label> <br />
                    <textarea 
                        placeholder='Content of Post' 
                        id='body'
                        type='text' 
                        name='body' 
                        className="w-full p-3 rounded" 
                        defaultValue={post.body}
                        />
                </div>
                <button 
                    type='submit' 
                    className="bg-blue-700 p-2 rounded text-white font-semibold hover:bg-blue-600 transition-colors duration-100"
                >
                    Edit Post
                </button>
            </Form>
        </section>
    </div>
  )
}
