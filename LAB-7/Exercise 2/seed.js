const mongoose = require('mongoose');

// Use the same DB name as your server.js
mongoose.connect('mongodb://127.0.0.1:27017/bookDB');

const bookSchema = new mongoose.Schema({
    title: String, author: String, category: String, 
    price: Number, rating: Number, year: Number
});
const Book = mongoose.model('Book', bookSchema);

const data = [
    { title: "JavaScript Essentials", author: "John Smith", category: "Programming", price: 450, rating: 4.5, year: 2023 },
    { title: "Advanced Python", author: "Alice Wood", category: "Programming", price: 899, rating: 4.8, year: 2022 },
    { title: "Data Structures in C", author: "Robert Fox", category: "Programming", price: 320, rating: 3.9, year: 2021 },
    { title: "The Galactic War", author: "S.J. Collins", category: "Fiction", price: 250, rating: 4.2, year: 2020 },
    { title: "Mystery of the Nile", author: "Agatha Reed", category: "Fiction", price: 199, rating: 4.1, year: 2019 },
    { title: "Quantum Mechanics", author: "Dr. Niels B.", category: "Science", price: 1200, rating: 4.9, year: 2024 },
    { title: "Organic Chemistry", author: "P.W. Atkins", category: "Science", price: 750, rating: 3.5, year: 2018 },
    { title: "Node.js Microservices", author: "Mario Casciaro", category: "Programming", price: 550, rating: 4.6, year: 2023 },
    { title: "The Silent Patient", author: "Alex Michaelides", category: "Fiction", price: 299, rating: 4.7, year: 2019 },
    { title: "Brief History of Time", author: "Stephen Hawking", category: "Science", price: 400, rating: 4.9, year: 1988 }
];

async function seed() {
    await Book.deleteMany({}); // Clears existing data
    await Book.insertMany(data);
    console.log("Database Seeded Successfully! You can now close this and run node server.js");
    process.exit();
}

seed();