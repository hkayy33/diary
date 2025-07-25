const express = require('express');
const cors = require('cors');

const diaryRouter = require('./routers/diary');
const app = express();
app.use(cors());

app.use(express.json());
app.use('/diary', diaryRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Diary",
    description: "Here are the diary entries"
  })
})

module.exports = app; 


