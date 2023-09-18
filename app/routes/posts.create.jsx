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
                    <label htmlFor='content'>Content </label> <br />
                    <textarea id='content' type='text' name='content' />
                </div>

                <button type='submit'>Add new Post</button>
            </form>
        </>
    )
}