
const deletePost = async (id) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.reload();

    } else {
        alert('Failed to delete post.');
    }
};

const deletePostHandler = async (event) => {
    if (event.target.matches('.delete-post')) {
        const post_id = event.target.getAttribute("data-post-id");
        deletePost(post_id);
    }
};

document.addEventListener('click', deletePostHandler);