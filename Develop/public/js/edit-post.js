
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const editblogpost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-update-blog-post').value.trim();
    const content = document.querySelector('#content-update-blog-post').value.trim();
    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post.');
        }
    }
};

// Add an event listener to the logout button
const editpostform = document.querySelector('.update-blog-post-form');
if (editpostform) {
    editpostform.addEventListener('submit', editblogpost);
}

// document.querySelector('.update-blog-post-form').addEventListener('submit', editblogpost);