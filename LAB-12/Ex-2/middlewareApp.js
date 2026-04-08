const express = require('express');
const app = express();

// -----------------------------
// Global Middleware (Logging)
// -----------------------------
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[GLOBAL] ${req.method} ${req.url} - ${time}`);
    next();
});

// -----------------------------
// JSON Middleware
// -----------------------------
app.use(express.json());

// -----------------------------
// Custom Middleware 1
// -----------------------------
const middleware1 = (req, res, next) => {
    console.log("Middleware 1 executed");
    req.customMessage = "Hello from Middleware 1";
    next();
};

// -----------------------------
// Custom Middleware 2
// -----------------------------
const middleware2 = (req, res, next) => {
    console.log("Middleware 2 executed");
    next();
};

// -----------------------------
// Route-level Middleware
// -----------------------------
const routeMiddleware = (req, res, next) => {
    console.log("Route-specific middleware executed");
    next();
};

// -----------------------------
// Routes
// -----------------------------

// ✅ ROOT route (FIXED)
app.get('/', (req, res) => {
    res.send("Middleware Server Running 🚀");
});

// Route with middleware chaining
app.get('/home', middleware1, middleware2, (req, res) => {
    res.send(`Home Page - ${req.customMessage}`);
});

// Route-level middleware
app.get('/about', routeMiddleware, (req, res) => {
    res.send("About Page");
});

// POST route (request preprocessing)
app.post('/data', middleware1, (req, res) => {
    console.log("Request Body:", req.body);
    res.json({
        message: "Data received successfully",
        data: req.body
    });
});

// -----------------------------
// Start Server
// -----------------------------
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});