const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Silent connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    created_date: { type: String, default: () => new Date().toLocaleDateString() }
});

const Note = mongoose.model('Note', noteSchema);

app.post('/notes', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).send(note);
    } catch (e) { res.status(400).send(e); }
});

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

app.put('/notes/:id', async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.send({ status: "updated" });
});

app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.send({ status: "deleted" });
});

app.listen(3000);