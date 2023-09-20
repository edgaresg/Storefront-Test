import { redirect } from "@remix-run/node"
import { db } from "../services/db"
import { useRouteError } from "@remix-run/react"

export const action = async ({ request }) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')

    const post = await db.post.create({ data: { title, body } })

    return redirect(`/posts/${post.id}`)
}

export function ErrorBoundary() {
    const error = useRouteError()

    return (
        <div>
            <strong>Some thing went wrong: {error.message}</strong>
        </div>
    )
}

export default function CreatePost() {
    return (
        <div>
            <h2 className=" text-4xl">Create new post</h2>
            <section className=" mt-10 flex">
                <form method='POST' className="w-[50%] flex gap-10 flex-col">
                    <div>
                        <label htmlFor='title'>Title </label><br />
                        <input placeholder='Title of Post' id='title' type='text' name='title' className="w-full p-3 rounded" />
                    </div>
                    <div>
                        <label htmlFor='content'>Body </label> <br />
                        <textarea placeholder='Content of Post' id='body' type='text' name='body' className="w-full p-3 rounded" />
                    </div>
                    <button 
                        type='submit' 
                        className="bg-blue-700 p-2 rounded text-white font-semibold hover:bg-blue-600 transition-colors duration-100"
                    >
                        Add new Post
                    </button>
                </form>
            </section>
        </div>
    )
}