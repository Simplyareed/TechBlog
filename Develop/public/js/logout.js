
const techbloglogout =async()=>{
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {   
        alert('Failed to log out.');
    }
};

// Add an event listener to the logout button
const blogLogoutButton = document.querySelector('#blog-logout');
if (blogLogoutButton) {
  blogLogoutButton.addEventListener('click', techbloglogout);
}

// document.querySelector('#logout').addEventListener('click', techbloglogout);