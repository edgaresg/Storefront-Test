import { useParams } from '@remix-run/react';

export default function SinglePost() {
    const params = useParams()
    
    return (
        <>
            <h2>Post Title of {params.postId}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipscing elit.
            </p>
        </>
    );
}