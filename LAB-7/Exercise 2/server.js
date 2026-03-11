const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookDB');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    rating: Number,
    year: Number
});

const Book = mongoose.model('Book', bookSchema);

// 1. Search Books by Title (Regex)
app.get('/books/search', async (req, res) => {
    const { title } = req.query;
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.json(books);
});

// 2. Filter by Category
app.get('/books/category/:cat', async (req, res) => {
    const books = await Book.find({ category: req.params.cat });
    res.json(books);
});

// 3. Sort by Price or Rating
app.get('/books/sort/:field', async (req, res) => {
    const field = req.params.field;
    const sortOrder = field === 'price' ? 1 : -1; // Price Ascending, Rating Descending
    const books = await Book.find().sort({ [field]: sortOrder });
    res.json(books);
});

// 4. Top Rated Books (Rating >= 4, Limit 5)
app.get('/books/top', async (req, res) => {
    const books = await Book.find({ rating: { $gte: 4 } }).limit(5);
    res.json(books);
});

// 5. Pagination
app.get('/books', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;
    const books = await Book.find().skip(skip).limit(limit);
    res.json(books);
});

app.listen(3000);