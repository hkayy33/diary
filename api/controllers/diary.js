const Diary = require("../models/Diary");

async function entries(req, res) {
    try {
        const entries = await Diary.getAll();
        res.status(200).json(entries)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function createEntry(req, res) {
    try {
        const entry = await Diary.create(req.body) // access all information inside the request body and pass it onto the model func
        res.status(200).json(entry)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

async function searchEntry(req, res) {
    try {
        const entry = await Diary.search(req.body)
        res.status(200).json(entry)
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

async function specificEntry(req, res) {
    try {
        const id = req.params.id
        const diaryEntry = await Diary.getOneById(id)
        res.status(200).json(diaryEntry)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
    entries, createEntry, searchEntry, specificEntry
}