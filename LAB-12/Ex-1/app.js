const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// ✅ ROOT ROUTE (fixes "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Welcome to REST API Server 🚀');
});

// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/users', userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});