
const newblogpost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-new-blog-post').value.trim();
    const content = document.querySelector('#content-new-blog-post').value.trim();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post.');
        }
    }
};

// Add an event listener to the logout button
const newpostform = document.querySelector('.new-blog-post-form');
if (newpostform) {
    newpostform.addEventListener('submit', newblogpost);
}

// document.querySelector('.new-blog-post-form').addEventListener('submit', newblogpost);