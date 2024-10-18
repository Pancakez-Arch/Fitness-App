// Add Userfront initialization
Userfront.init("demo1234");

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Call Userfront.login() to authenticate the user
    Userfront.login({
        method: "password",
        emailOrUsername: username,  // This field accepts either email or username
        password: password,
    }).then(function() {
        // Login successful, redirect to the home page
        window.location.href = "../Home/index.html";
    }).catch(function(error) {
        // Display error message
        document.getElementById('message').textContent = 'Invalid username or password';
        document.getElementById('message').style.color = 'red';
    });
});
