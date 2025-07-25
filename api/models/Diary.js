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

    static async create(data) {
        
            const { user_id, entry_date, text, category} = data;
            const existingEntry = await db.query("SELECT text from diary_entries WHERE text = $1", [text])

            if(existingEntry.rows.length > 0){
                throw new Error("Entry already exists! enter a new one");
            }
            else{
                const response = await db.query("INSERT INTO diary_entries (user_id,entry_date,text,category) VALUES ($1,$2,$3,$4) RETURNING *;", [user_id,entry_date,text,category]);
                return new Diary(response.rows[0]);
            }
    }

    static async search(data){
        const {entry_date} = data;
        const queryDB = await db.query("SELECT entry_date from diary_entries where entry_date = $1",[entry_date])
        if (queryDB.rows.length > 0) {
            return new Diary(queryDB.rows[0])
        } else {
            throw new Error("Entry does not exist");
        }
    }



}

module.exports = Diary;