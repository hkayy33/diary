const db = require('../database/connect');



class Diary {

    constructor({ entry_date, text, category, created_at, updated_at }) {
        this.entry_date = entry_date;
        this.text = text;
        this.category = category;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary_entries ORDER BY entry_date;");

        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }

        return response.rows.map(entry => new Diary(entry));
    }

    

}

module.exports = Diary;