const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); // For serving static files

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle user registration
app.post('/register', async (req, res) => {
  const { email, accountName, password } = req.body;

  // Basic validation checks
  if (!email || !accountName || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const user = { email, accountName, password: hashedPassword };

    // Read existing users from the file
    let users = [];
    if (fs.existsSync('users.json')) {
      const data = fs.readFileSync('users.json');
      users = JSON.parse(data);
    }

    // Add the new user to the users array
    users.push(user);

    // Write the updated users array back to the file
    fs.writeFileSync('users.json', JSON.stringify(users))

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
