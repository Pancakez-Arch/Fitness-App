document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real app, you'd verify these on the server)
    if (username === 'admin' && password === '1234') {
        // Store login status in localStorage
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('message').textContent = 'You are logged in!';
        document.getElementById('message').style.color = 'green';

        // Redirect to the home page (or any other page)
        window.location.href = "../Home/index.html";
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
        document.getElementById('message').style.color = 'red';
    }
});
