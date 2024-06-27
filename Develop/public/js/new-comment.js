
const blogcomment = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#content-new-blog-comment').value.trim();
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment.');
        }
    }
};

// Add an event listener to the logout button
const newCommentForm = document.querySelector('.new-blog-comment-form');
if (newCommentForm) {
    newCommentForm.addEventListener('submit',  blogcomment);
}

// document.querySelector('.new-blog-comment-form').addEventListener('submit', blogcomment);