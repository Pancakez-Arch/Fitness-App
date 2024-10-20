// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent default form behavior
  
    // Get the form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordVerify = document.getElementById('password-verify').value;
  
    // Verify that passwords match
    if (password !== passwordVerify) {
      alert('Passwords do not match');
      return;
    }
  
    // Send the data to the backend
    const response = await fetch('http://localhost:3000/Login/signup/signup.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    // Handle the response
    if (response.ok) {
      alert('User registered successfully');
      window.location.href = '../../Home/index.html';
    } else {
      alert('Failed to register user');
    }
  });
  