
const techblogSignUphandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();


    if (username && password) {
        const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to signup.');
        }
    }
    };

    const signupForm = document.querySelector('.blog-signup-form');
if (signupForm) {
    signupForm.addEventListener('submit',  techblogSignUphandler);
}

// document.querySelector('.blog-signup-form').addEventListener('submit', techblogSignUphandler);