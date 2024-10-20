// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to the server
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Invalid username or password');
        }
    })
    .then(data => {
        // Login successful, store the username
        localStorage.setItem('username', data.username);

        // Redirect to the home page
        window.location.href = "../Home/index.html";
    })
    .catch(error => {
        // Display error message
        document.getElementById('message').textContent = error.message;
        document.getElementById('message').style.color = 'red';
    });
});
