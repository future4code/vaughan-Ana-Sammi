import React from 'react' 
import useProtectedPage from '../../hooks/useProtectedPage';

function PostPage() {

   useProtectedPage()

    return(
        <div>
            Post details
        </div>
    )
}

export default PostPage;