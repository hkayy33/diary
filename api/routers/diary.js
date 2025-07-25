const { Router } = require("express");
const diaryController = require("../controllers/diary");
const diaryRouter = Router();


diaryRouter.get('/', diaryController.entries);
diaryRouter.post('/', diaryController.createEntry);
diaryRouter.get('/search', diaryController.searchEntry);
// diaryRouter.get(“/:id”, diaryController.specificEntry);
// diaryRouter.patch(“/:id”, diaryController.updateEntry);
// diaryRouter.delete(“/:id”, diaryController.deleteEntry);

module.exports = diaryRouter;