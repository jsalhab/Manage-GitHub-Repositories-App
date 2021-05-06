const express = require("express");
const searchControllers = require("../controllers/search-controllers");

const router = express.Router();

router.get("/search/:searchterm", searchControllers.getRepos);

router.get("/bookmark/:id", searchControllers.bookmarkRepo);

router.get("/bookmarks", searchControllers.getBookmarks);

router.delete("/remove-bookmark/:id", searchControllers.deleteBookmark);

module.exports = router;
