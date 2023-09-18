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
        <>
            <h2>Create new post</h2>
            <form method='POST'>
                <div>
                    <label htmlFor='title'>Title </label><br />
                    <input placeholder='Title of Post' id='title' type='text' name='title' />
                </div>
                <div>
                    <label htmlFor='content'>Body </label> <br />
                    <textarea placeholder='Content of Post' id='body' type='text' name='body' />
                </div>

                <button type='submit'>Add new Post</button>
            </form>
        </>
    )
}