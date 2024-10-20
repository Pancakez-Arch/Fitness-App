const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static('public'));

// Handle user registration
app.post('/register', async (req, res) => {
    const { email, accountName, password } = req.body;

    // Basic validation checks
    if (!email || !accountName || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Read existing users from the file
        let users = [];
        if (fs.existsSync('users.json')) {
            const data = fs.readFileSync('users.json', 'utf8');
            users = JSON.parse(data);
        }

        // Check for duplicate email or account name
        const userExists = users.some(user => user.email === email || user.accountName === accountName);
        if (userExists) {
            return res.status(409).json({ message: 'Email or account name already exists.' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const user = { email, accountName, password: hashedPassword };
        users.push(user);

        // Write the updated users array back to the file
        fs.writeFileSync('users.json', JSON.stringify(users), 'utf8');
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Serve the login page
app.get('/', (req, res) => {
    res.redirect('/Login/login.html'); // Redirect to your login page
});

app.get('/Login/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/Login/login.html'));
});
// Get products
app.get('/api/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading product data' });
        }
        res.json(JSON.parse(data));
    });
});

// Handle purchase
app.post('/api/purchase', (req, res) => {
    const { email, productId } = req.body;

    if (!email || !productId) {
        return res.status(400).json({ message: 'Email and product ID are required.' });
    }

    // Create order object
    const order = { email, productId, date: new Date() };

    // Read existing orders
    fs.readFile('orders.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading orders data' });
        }

        const orders = JSON.parse(data || '[]'); // Use an empty array if no orders exist
        orders.push(order);

        // Write updated orders back to the file
        fs.writeFile('orders.json', JSON.stringify(orders), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error saving order' });
            }
            res.status(201).json({ message: 'Purchase successful' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
// Create a route to display the logged-in users
app.get('/users', (req, res) => {
  const users = getUsers(); // Get the logged-in users from the users array
  res.render('users', { users });
});

app.get('/users', (req, res) => {
  const users = getUsers(); // Get the logged-in users from the users array
  res.json(users);
});