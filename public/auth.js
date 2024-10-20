const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample user data (in practice, this would be stored in a database)
const users = {
    demoUser: { username: 'demoUser', password: 'demoPass' }
};

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Validate user credentials
    if (users[username] && users[username].password === password) {
        res.json({ message: 'Login successful', username });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
