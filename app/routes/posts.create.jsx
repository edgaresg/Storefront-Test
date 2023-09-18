import { redirect } from "@remix-run/node"

export const action = async ({ request }) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')

    return redirect('/')
}

export default function CreatePost() {
    return (
        <>
            <h2>Create new post</h2>
            <form method='POST'>
                <div>
                    <label htmlFor='title'>Title </label><br />
                    <input id='title' type='text' name='title' />
                </div>
                <div>
                    <label htmlFor='content'>Body </label> <br />
                    <textarea id='body' type='text' name='body' />
                </div>

                <button type='submit'>Add new Post</button>
            </form>
        </>
    )
}