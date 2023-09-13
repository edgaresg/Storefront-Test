export default function CreatePost() {
    return (
        <form method='POST'>
            <div>
                <label htmlFor="title">Title </label>
                <input id="title" type="text" name="title" />
            </div>
            <div>
                <label htmlFor="content">Content </label> 
                <textarea id="content" type="text" name="content" />
            </div>
            
            <button type="submit">Add new Post</button>
        </form>
    )
}