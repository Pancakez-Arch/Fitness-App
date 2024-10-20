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

// Add this route at the top of your server.js file, right after your other `app.use` lines.
app.get('/', (req, res) => {
  res.redirect('/Login/login.html'); // Redirect to your login page
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the shop page
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

// Get products
app.get('/api/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
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
            return res.status(500).json({ message: 'Error reading orders data' });
        }

        const orders = JSON.parse(data);
        orders.push(order);

        // Write updated orders back to the file
        fs.writeFile('orders.json', JSON.stringify(orders), (err) => {
            if (err) {
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

