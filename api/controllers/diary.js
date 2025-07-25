const Diary = require("../models/Diary");

async function entries(req, res) {
    try {
        const entries = await Diary.getAll();
        res.status(200).json(entries)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
  entries
}