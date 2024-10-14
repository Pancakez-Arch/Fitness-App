// Initialize Userfront
Userfront.init("demo1234");  // Replace with your actual tenant ID

// Handle signup form submission
var signupFormEl = document.getElementById("signup-form");
signupFormEl.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form behavior

    var email = document.getElementById("email").value;
    var accountName = document.getElementById("account-name").value;
    var password = document.getElementById("password").value;
    var passwordVerify = document.getElementById("password-verify").value;

    // Verify passwords match
    if (password !== passwordVerify) {
        setAlert("Password verification must match.");
        return;
    }

    // Signup using Userfront
    Userfront.signup({
        method: "password",
        email: email,
        password: password,
        data: {
            accountName: accountName,
        },
    }).then(function() {
        // Redirect on successful signup
        window.location.href = "../../Home/index.html";
    }).catch(function(error) {
        setAlert(error.message);
    });
});

// Set alert function to display error or success messages
function setAlert(message) {
    var alertEl = document.getElementById("alert");
    alertEl.innerText = message;
    alertEl.style.display = message ? "block" : "none";
}
